import React, { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Camera,
  ChevronRight,
  Clock,
  ImagePlus,
  Leaf,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";
import { CameraScanner } from "./components/CameraScanner.tsx";
import { ResultView } from "./components/ResultView.tsx";
import { SAMPLE_PLANTS } from "./data/samplePlants.ts";
import type { AppView, PlantScanResult, RecentScanItem } from "./types.ts";

const STORAGE_KEY = "plantmitra_recent_scans_v1";

function loadRecentScans(): RecentScanItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecentScans(items: RecentScanItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 12)));
  } catch {
    // Ignore storage quota errors gracefully
  }
}

function fileToCompressedDataUrl(file: File): Promise<{ dataUrl: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Invalid image file."));
      img.onload = () => {
        const maxDim = 1024;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve({ dataUrl: String(reader.result), mimeType: file.type || "image/jpeg" });
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve({
          dataUrl: canvas.toDataURL("image/jpeg", 0.88),
          mimeType: "image/jpeg",
        });
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

function matchSamplePlantByHint(hint?: string): PlantScanResult {
  const lower = (hint || "").toLowerCase();
  if (lower.includes("neem") || lower.includes("bevu")) return SAMPLE_PLANTS[1];
  if (lower.includes("aloe")) return SAMPLE_PLANTS[2];
  if (lower.includes("mango") || lower.includes("mavu")) return SAMPLE_PLANTS[3];
  if (lower.includes("mint") || lower.includes("pudina")) return SAMPLE_PLANTS[4];
  return SAMPLE_PLANTS[0];
}

function formatScanDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return "Recently";
  }
}

export default function App() {
  const [view, setView] = useState<AppView>("home");
  const [activePlant, setActivePlant] = useState<PlantScanResult | null>(null);
  const [pendingPreviewUrl, setPendingPreviewUrl] = useState<string>("");
  const [demoNotice, setDemoNotice] = useState<string | null>(null);
  const [featuredIdx, setFeaturedIdx] = useState<number>(0);
  const [recentScans, setRecentScans] = useState<RecentScanItem[]>(() => loadRecentScans());
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [view]);

  const addOrUpdateSaved = (plant: PlantScanResult) => {
    const now = new Date().toISOString();
    const item: RecentScanItem = {
      ...plant,
      savedAt: now,
    };
    setRecentScans((prev) => {
      const filtered = prev.filter((p) => p.id !== plant.id);
      const updated = [item, ...filtered].slice(0, 12);
      saveRecentScans(updated);
      return updated;
    });
  };

  const isPlantSaved = (plantId?: string): boolean => {
    if (!plantId) return false;
    return recentScans.some((item) => item.id === plantId);
  };

  const identifyImage = async (dataUrl: string, mimeType: string, fileNameHint?: string) => {
    setPendingPreviewUrl(dataUrl);
    setDemoNotice(null);
    setView("identifying");

    try {
      const res = await fetch("/api/identify-plant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: dataUrl, mimeType }),
      });

      const payload = await res.json().catch(() => null);

      if (!res.ok) {
        const errorMsg =
          payload?.code === "NO_API_KEY"
            ? "Demo Mode Active: AI service key is not set, showing sample botanical data."
            : payload?.error ||
              "AI identification is temporarily unavailable. Showing sample botanical data.";

        const sample = matchSamplePlantByHint(fileNameHint);
        const demoResult: PlantScanResult = {
          ...sample,
          id: `${sample.id}-${Date.now()}`,
          imageUrl: dataUrl || sample.imageUrl,
          isDemo: true,
        };
        setDemoNotice(errorMsg);
        setActivePlant(demoResult);
        setView("result");
        return;
      }

      if (!payload || payload.isPlant === false) {
        setView("not_identified");
        return;
      }

      const result: PlantScanResult = {
        id: `scan-${Date.now()}`,
        isPlant: true,
        confidence:
          typeof payload.confidence === "number"
            ? Math.min(100, Math.max(1, Math.round(payload.confidence)))
            : 94,
        englishName: payload.englishName || "Identified Plant",
        kannadaName: payload.kannadaName || "ಸಸ್ಯ",
        scientificName: payload.scientificName || "Botanical species",
        imageUrl: dataUrl,
        aboutEnglish: payload.aboutEnglish || "",
        aboutKannada: payload.aboutKannada || "",
        medicinalUses: Array.isArray(payload.medicinalUses) ? payload.medicinalUses : [],
        advantages: Array.isArray(payload.advantages) ? payload.advantages : [],
        disadvantages: Array.isArray(payload.disadvantages) ? payload.disadvantages : [],
        howToUseTitleEnglish:
          payload.howToUseTitleEnglish || "How to Prepare Kashaya / Juice",
        howToUseTitleKannada:
          payload.howToUseTitleKannada || "ಕಷಾಯ / ರಸ ತಯಾರಿಸುವ ವಿಧಾನ",
        howToUseSteps: Array.isArray(payload.howToUseSteps) ? payload.howToUseSteps : [],
        isDemo: false,
        scannedAt: new Date().toISOString(),
      };

      setActivePlant(result);
      addOrUpdateSaved(result);
      setView("result");
    } catch {
      const sample = matchSamplePlantByHint(fileNameHint);
      setDemoNotice("Network unavailable — showing offline Demo Mode sample botanical guide.");
      setActivePlant({
        ...sample,
        id: `${sample.id}-${Date.now()}`,
        imageUrl: dataUrl || sample.imageUrl,
        isDemo: true,
      });
      setView("result");
    }
  };

  const handleFileSelected = async (file: File) => {
    try {
      const { dataUrl, mimeType } = await fileToCompressedDataUrl(file);
      await identifyImage(dataUrl, mimeType, file.name);
    } catch {
      setView("not_identified");
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) {
      handleFileSelected(file);
    }
  };

  const openSamplePlant = (sample: PlantScanResult) => {
    setDemoNotice(null);
    setActivePlant(sample);
    setView("result");
  };

  const openRecentScan = (item: RecentScanItem) => {
    setDemoNotice(item.isDemo ? "Demo Botanical Reference Mode" : null);
    setActivePlant(item);
    setView("result");
  };

  const handleClearHistory = () => {
    setRecentScans([]);
    saveRecentScans([]);
  };

  const featuredPlant = SAMPLE_PLANTS[featuredIdx];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#111C14]">
      {/* Top Bar Contract: 3 zones (Wordmark — Nav Links — Primary Action) */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-emerald-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => setView("home")}
            className="text-xl font-bold tracking-tight text-[#14532D] font-display whitespace-nowrap shrink-0 text-left focus-visible:outline-2 focus-visible:outline-emerald-700 rounded-lg"
          >
            PlantMitra
          </button>

          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-emerald-950/70"
            aria-label="Primary Navigation"
          >
            <a
              href="#scanner-hero"
              onClick={() => setView("home")}
              className="hover:text-[#14532D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Scanner
            </a>
            <a
              href="#sample-plants"
              onClick={() => setView("home")}
              className="hover:text-[#14532D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Sample Plants
            </a>
            <a
              href="#recent-scans"
              onClick={() => setView("home")}
              className="hover:text-[#14532D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Recent Scans
            </a>
            <a
              href="#how-it-works"
              onClick={() => setView("home")}
              className="hover:text-[#14532D] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Guide
            </a>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setView("camera")}
              className="min-h-[42px] px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
            >
              <Camera className="w-4 h-4" />
              <span>Live Scan</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {view === "home" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-14">
            {/* Hero Section */}
            <section
              id="scanner-hero"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
            >
              {/* Left Column: Brand Hero & 2 Big Scan Buttons */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-10">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-emerald-800 mb-3">
                    Kannada & English Botanical Companion · ಸಸ್ಯ ಮಿತ್ರ
                  </p>

                  <h1 className="text-3xl sm:text-5xl font-bold text-[#111C14] tracking-tight leading-[1.12] text-balance">
                    Identify Medicinal Leaves in Seconds
                  </h1>

                  <p className="text-lg sm:text-xl font-semibold text-emerald-800 font-kannada mt-3">
                    ಔಷಧೀಯ ಸಸ್ಯಗಳನ್ನು ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಗುರುತಿಸಿ
                  </p>

                  <p className="text-[15px] sm:text-base text-emerald-950/75 mt-4 leading-relaxed max-w-xl">
                    Point your camera at any leaf or upload a clear photo to view the plant name,
                    medicinal uses, benefits, precautions, and traditional Kashaya or juice
                    preparation steps in both English and Kannada.
                  </p>
                </div>

                {/* 2 Primary Action Buttons */}
                <div className="mt-8 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <button
                      type="button"
                      onClick={() => setView("camera")}
                      className="min-h-[56px] px-5 py-3.5 rounded-2xl bg-[#14532D] hover:bg-[#166534] active:scale-[0.99] text-white font-semibold text-base inline-flex items-center justify-center gap-2.5 shadow-sm transition-all whitespace-nowrap"
                    >
                      <Camera className="w-5 h-5" />
                      <span>Live Camera Scan</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="min-h-[56px] px-5 py-3.5 rounded-2xl bg-[#F0F7F2] hover:bg-emerald-100/80 active:scale-[0.99] border border-emerald-900/15 text-[#14532D] font-semibold text-base inline-flex items-center justify-center gap-2.5 transition-all whitespace-nowrap"
                    >
                      <ImagePlus className="w-5 h-5" />
                      <span>Upload Leaf Photo</span>
                    </button>
                  </div>

                  <p className="text-xs text-emerald-950/60 font-kannada pt-1">
                    ನೇರ ಕ್ಯಾಮೆರಾ ಸ್ಕ್ಯಾನ್ ಅಥವಾ ಗ್ಯಾಲರಿಯಿಂದ ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Dropzone + Featured Specimen Switcher */}
              <div
                className={`lg:col-span-6 rounded-3xl border transition-colors p-6 sm:p-8 flex flex-col justify-between bg-[#EEF5F0] ${
                  isDragging
                    ? "border-emerald-600 ring-2 ring-emerald-500/30"
                    : "border-emerald-950/10"
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file && file.type.startsWith("image/")) {
                    handleFileSelected(file);
                  }
                }}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-base font-semibold text-[#111C14]">
                      Featured Botanical Specimen
                    </h2>
                    <p className="text-xs text-emerald-900/70">
                      Tap a plant below or drop a leaf image here to scan
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white border border-emerald-950/10 text-xs font-semibold text-emerald-900 hover:bg-emerald-50 inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Drop / Browse</span>
                  </button>
                </div>

                {/* Specimen Preview Frame */}
                <div className="bg-white rounded-2xl border border-emerald-950/10 overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch flex-1">
                  <div className="sm:col-span-6 bg-[#F4F8F5] min-h-[220px]">
                    <img
                      src={featuredPlant.imageUrl}
                      alt={`${featuredPlant.englishName} (${featuredPlant.kannadaName})`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:col-span-6 p-5 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-emerald-800/75 italic">
                        {featuredPlant.scientificName}
                      </p>
                      <h3 className="text-xl font-bold text-[#111C14] mt-1">
                        {featuredPlant.englishName}
                      </h3>
                      <p className="text-lg font-bold text-emerald-800 font-kannada">
                        {featuredPlant.kannadaName}
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-950/75 mt-3 line-clamp-3 leading-relaxed">
                        {featuredPlant.aboutEnglish}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openSamplePlant(featuredPlant)}
                      className="mt-4 min-h-[44px] w-full px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                    >
                      <span>View Bilingual Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Interactive Segmented Tabs for 5 Featured Plants */}
                <div className="mt-4 flex flex-wrap gap-1.5 bg-white/80 p-1.5 rounded-2xl border border-emerald-950/10">
                  {SAMPLE_PLANTS.map((plant, idx) => (
                    <button
                      key={plant.id}
                      type="button"
                      onClick={() => setFeaturedIdx(idx)}
                      className={`min-h-[38px] flex-1 min-w-[90px] px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap ${
                        featuredIdx === idx
                          ? "bg-[#14532D] text-white shadow-sm"
                          : "text-emerald-950/75 hover:bg-emerald-50 hover:text-emerald-950"
                      }`}
                    >
                      {plant.englishName.split(" ")[0]} ·{" "}
                      <span className="font-kannada">{plant.kannadaName}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Sample Plants (Demo Mode Library) */}
            <section id="sample-plants">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-[#111C14]">
                    Common Medicinal Plants
                  </h2>
                  <p className="text-sm text-emerald-900/75 font-kannada mt-0.5">
                    ಸಾಮಾನ್ಯ ಔಷಧೀಯ ಸಸ್ಯಗಳು — ತ್ವರಿತ ಮಾಹಿತಿಗಾಗಿ ಆಯ್ಕೆಮಾಡಿ
                  </p>
                </div>
                <p className="text-xs text-emerald-950/60">
                  5 Instant Bilingual Guides (Demo Ready)
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {SAMPLE_PLANTS.map((plant) => (
                  <button
                    key={plant.id}
                    type="button"
                    onClick={() => openSamplePlant(plant)}
                    className="group text-left bg-white rounded-2xl border border-emerald-950/10 overflow-hidden hover:border-emerald-600/40 hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="aspect-square w-full bg-[#F2F6F3] overflow-hidden">
                      <img
                        src={plant.imageUrl}
                        alt={plant.englishName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                      />
                    </div>
                    <div className="p-3.5">
                      <p className="text-sm font-bold text-[#111C14] truncate">
                        {plant.englishName}
                      </p>
                      <p className="text-sm font-semibold text-emerald-800 font-kannada truncate">
                        {plant.kannadaName}
                      </p>
                      <p className="text-[11px] text-emerald-950/55 italic truncate mt-1">
                        {plant.scientificName}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Recent Scans History */}
            <section id="recent-scans" className="bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#111C14]">Recent Scans</h2>
                  <p className="text-sm text-emerald-900/70 font-kannada mt-0.5">
                    ಇತ್ತೀಚೆಗೆ ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ ಸಸ್ಯಗಳು
                  </p>
                </div>

                {recentScans.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-950/70 hover:text-red-700 hover:bg-red-50 inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Clear History</span>
                  </button>
                )}
              </div>

              {recentScans.length === 0 ? (
                <div className="rounded-2xl bg-[#F6FAF7] border border-emerald-950/5 p-8 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-950/10 flex items-center justify-center text-emerald-700 mx-auto mb-3">
                    <Clock className="w-6 h-6" />
                  </div>
                  <p className="text-base font-semibold text-[#111C14]">
                    No saved leaf scans yet
                  </p>
                  <p className="text-sm text-emerald-950/70 mt-1 max-w-md mx-auto">
                    Scan a leaf with your camera or save any plant guide above to keep it in your
                    quick history.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentScans.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => openRecentScan(item)}
                      className="text-left p-3.5 rounded-2xl bg-[#F8FAF8] hover:bg-[#EFF6F1] border border-emerald-950/10 flex items-center gap-3.5 transition-colors group min-h-[76px]"
                    >
                      <div className="w-16 h-16 rounded-xl bg-emerald-100 overflow-hidden shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.englishName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#111C14] truncate">
                          {item.englishName}
                        </p>
                        <p className="text-sm font-semibold text-emerald-800 font-kannada truncate">
                          {item.kannadaName}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-emerald-950/60 mt-1 tabular-nums">
                          <span>{item.confidence}% Match</span>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{formatScanDate(item.savedAt)}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-emerald-800/50 group-hover:text-emerald-900 shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* Simple How It Works Section */}
            <section id="how-it-works" className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl border border-emerald-950/10 p-6">
                <p className="text-sm font-bold text-emerald-800 tabular-nums mb-2">
                  01. Capture or Upload
                </p>
                <p className="text-sm text-emerald-950/75 leading-relaxed">
                  Frame a single leaf in daylight using the square live camera scanner or upload a
                  photo from your gallery.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-emerald-950/10 p-6">
                <p className="text-sm font-bold text-emerald-800 tabular-nums mb-2">
                  02. Instant Identification
                </p>
                <p className="text-sm text-emerald-950/75 leading-relaxed">
                  PlantMitra identifies the botanical species, confidence percentage, and traditional
                  Kannada and English names.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-emerald-950/10 p-6">
                <p className="text-sm font-bold text-emerald-800 tabular-nums mb-2">
                  03. Safe Traditional Guide
                </p>
                <p className="text-sm text-emerald-950/75 leading-relaxed">
                  Read medicinal uses, side effects, and Kashaya preparation steps, then save or
                  share directly on WhatsApp.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* Identifying Loading Screen */}
        {view === "identifying" && (
          <div className="max-w-lg mx-auto px-4 py-16 sm:py-24 text-center">
            <div className="bg-white rounded-3xl border border-emerald-950/10 p-8 sm:p-10 shadow-sm">
              <div className="relative w-52 h-52 mx-auto rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-200 mb-6">
                {pendingPreviewUrl ? (
                  <img
                    src={pendingPreviewUrl}
                    alt="Leaf being identified"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-emerald-700">
                    <Leaf className="w-12 h-12" />
                  </div>
                )}
                <div className="animate-scan-sweep absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </div>

              <div className="w-8 h-8 border-[3px] border-emerald-200 border-t-emerald-700 rounded-full animate-spin mx-auto mb-4" />

              <h2 className="text-2xl font-bold text-[#111C14]">
                Plant Identifying...
              </h2>
              <p className="text-lg font-semibold text-emerald-800 font-kannada mt-1">
                ಸಸ್ಯವನ್ನು ಗುರುತಿಸಲಾಗುತ್ತಿದೆ...
              </p>
              <p className="text-sm text-emerald-950/65 mt-3">
                Analyzing leaf shape, venation, and Ayurvedic medicinal profile
              </p>
            </div>
          </div>
        )}

        {/* Not Identified / Unclear Photo Screen */}
        {view === "not_identified" && (
          <div className="max-w-lg mx-auto px-4 py-16 sm:py-24 text-center">
            <div className="bg-white rounded-3xl border border-emerald-950/10 p-8 sm:p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-5">
                <AlertCircle className="w-7 h-7" />
              </div>

              <h2 className="text-2xl font-bold text-[#111C14]">
                Sorry, try again with clear leaf photo
              </h2>
              <p className="text-lg font-semibold text-emerald-900 font-kannada mt-2">
                ಕ್ಷಮಿಸಿ, ಸ್ಪಷ್ಟವಾದ ಎಲೆಯ ಫೋಟೋದೊಂದಿಗೆ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ
              </p>
              <p className="text-sm text-emerald-950/70 mt-3 leading-relaxed">
                Make sure a single leaf fills the center of the frame in natural light without
                motion blur.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setView("camera")}
                  className="min-h-[48px] px-5 py-3 rounded-2xl bg-[#14532D] hover:bg-[#166534] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Camera className="w-4 h-4" />
                  <span>Try Live Camera</span>
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="min-h-[48px] px-5 py-3 rounded-2xl bg-[#F0F7F2] hover:bg-emerald-100 border border-emerald-900/15 text-[#14532D] font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Upload Another Photo</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Result Screen */}
        {view === "result" && activePlant && (
          <ResultView
            plant={activePlant}
            isSaved={isPlantSaved(activePlant.id)}
            demoNotice={demoNotice}
            onSave={addOrUpdateSaved}
            onScanAgain={() => setView("camera")}
            onBackHome={() => setView("home")}
          />
        )}
      </main>

      {/* Camera Modal */}
      {view === "camera" && (
        <CameraScanner
          onCapture={(dataUrl, mimeType) => identifyImage(dataUrl, mimeType)}
          onUploadFile={handleFileSelected}
          onClose={() => setView("home")}
        />
      )}

      {/* Hidden Shared File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />

      {/* Quiet Footer */}
      <footer className="border-t border-emerald-950/10 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-950/65">
          <p>PlantMitra — Kannada & English Medicinal Plant Reference</p>
          <p className="font-kannada">
            ಕೇವಲ ಮಾಹಿತಿಗಾಗಿ ಮಾತ್ರ · ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ
          </p>
        </div>
      </footer>
    </div>
  );
}
