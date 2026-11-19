import React, { useEffect, useRef, useState, useCallback } from "react";
import { Camera, ImagePlus, RefreshCw, X, AlertCircle } from "lucide-react";

interface CameraScannerProps {
  onCapture: (dataUrl: string, mimeType: string) => void;
  onUploadFile: (file: File) => void;
  onClose: () => void;
}

export const CameraScanner: React.FC<CameraScannerProps> = ({
  onCapture,
  onUploadFile,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  const startCamera = useCallback(
    async (mode: "environment" | "user") => {
      stopStream();
      setCameraReady(false);
      setCameraError(null);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError(
          "Live camera is unavailable in this browser. Please upload a clear leaf photo from your gallery."
        );
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: mode },
            width: { ideal: 1280 },
            height: { ideal: 1280 },
          },
          audio: false,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setCameraReady(true);
        }
      } catch (err) {
        console.warn("Camera access error:", err);
        setCameraError(
          "Camera access was denied or no camera was detected. You can upload a leaf photo from your device instead."
        );
      }
    },
    [stopStream]
  );

  useEffect(() => {
    startCamera(facingMode);
    return () => {
      stopStream();
    };
  }, [facingMode, startCamera, stopStream]);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !cameraReady) return;

    const vw = video.videoWidth || 720;
    const vh = video.videoHeight || 720;
    const size = Math.min(vw, vh);
    const sx = Math.floor((vw - size) / 2);
    const sy = Math.floor((vh - size) / 2);

    const outputSize = Math.min(size, 1024);
    canvas.width = outputSize;
    canvas.height = outputSize;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, sx, sy, size, size, 0, 0, outputSize, outputSize);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.88);
    stopStream();
    onCapture(dataUrl, "image/jpeg");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      stopStream();
      onUploadFile(file);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B140E] text-white flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Live Plant Camera Scanner"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/50 backdrop-blur-md border-b border-white/10">
        <button
          type="button"
          onClick={() => {
            stopStream();
            onClose();
          }}
          className="min-h-[44px] min-w-[44px] px-3 inline-flex items-center gap-2 rounded-xl text-sm font-medium text-white/90 hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-400 whitespace-nowrap shrink-0"
        >
          <X className="w-5 h-5" />
          <span>Close</span>
        </button>

        <div className="text-center min-w-0 px-2">
          <p className="text-sm font-semibold tracking-tight truncate">Live Leaf Scanner</p>
          <p className="text-xs text-emerald-300 font-kannada truncate">
            ಎಲೆಯನ್ನು ಚೌಕದೊಳಗೆ ಇರಿಸಿ
          </p>
        </div>

        <button
          type="button"
          onClick={() => setFacingMode((prev) => (prev === "environment" ? "user" : "environment"))}
          className="min-h-[44px] min-w-[44px] px-3 inline-flex items-center justify-center rounded-xl text-white/90 hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-400 shrink-0"
          aria-label="Switch Camera"
          title="Switch Camera"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      {/* Viewfinder Area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black">
        {!cameraError ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            {/* Measured Scrim & Square Scanner Frame */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-square">
                {/* Corner Reticle Brackets */}
                <span className="absolute top-0 left-0 w-9 h-9 border-t-4 border-l-4 border-emerald-400 rounded-tl-2xl" />
                <span className="absolute top-0 right-0 w-9 h-9 border-t-4 border-r-4 border-emerald-400 rounded-tr-2xl" />
                <span className="absolute bottom-0 left-0 w-9 h-9 border-b-4 border-l-4 border-emerald-400 rounded-bl-2xl" />
                <span className="absolute bottom-0 right-0 w-9 h-9 border-b-4 border-r-4 border-emerald-400 rounded-br-2xl" />

                {/* Subtle Inner Guide Box */}
                <div className="w-full h-full rounded-2xl border border-white/25 overflow-hidden relative shadow-[0_0_0_9999px_rgba(0,0,0,0.45)]">
                  {cameraReady && (
                    <div className="animate-scan-sweep absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                  )}
                </div>
              </div>
            </div>

            {!cameraReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <p className="text-sm text-emerald-100 font-medium">
                  Starting camera...
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-md mx-auto px-6 py-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-300">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Camera Unavailable</h3>
            <p className="text-sm text-emerald-100/80 mb-6 leading-relaxed">
              {cameraError}
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="min-h-[48px] px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <ImagePlus className="w-5 h-5" />
              <span>Upload Leaf Photo</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Thumb-Zone Controls */}
      <div className="bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-5">
        <p className="text-center text-xs text-white/75 mb-4">
          Place one clear leaf inside the square frame in bright light
        </p>

        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="min-h-[48px] px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
          >
            <ImagePlus className="w-5 h-5" />
            <span>Gallery</span>
          </button>

          <button
            type="button"
            onClick={handleCapture}
            disabled={!cameraReady || Boolean(cameraError)}
            className="w-[72px] h-[72px] rounded-full bg-white text-emerald-950 flex items-center justify-center shadow-lg ring-4 ring-emerald-500/50 hover:scale-[1.03] active:scale-[0.96] disabled:opacity-40 disabled:pointer-events-none transition-transform shrink-0"
            aria-label="Capture Leaf Photo"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white">
              <Camera className="w-6 h-6" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              stopStream();
              onClose();
            }}
            className="min-h-[48px] px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium inline-flex items-center justify-center transition-colors whitespace-nowrap shrink-0"
          >
            <span>Cancel</span>
          </button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};
