import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Brain,
  CheckCircle2,
  Droplet,
  Flame,
  Heart,
  Info,
  Leaf,
  RotateCcw,
  Share2,
  Shield,
  Sparkles,
  Sun,
  Wind,
  XCircle,
} from "lucide-react";
import type { PlantScanResult } from "../types.ts";

interface ResultViewProps {
  plant: PlantScanResult;
  isSaved: boolean;
  demoNotice?: string | null;
  onSave: (plant: PlantScanResult) => void;
  onScanAgain: () => void;
  onBackHome: () => void;
}

function renderUseIcon(iconName: string) {
  const cls = "w-5 h-5 text-emerald-700 shrink-0";
  switch (iconName) {
    case "shield":
      return <Shield className={cls} />;
    case "heart":
      return <Heart className={cls} />;
    case "wind":
      return <Wind className={cls} />;
    case "sparkles":
      return <Sparkles className={cls} />;
    case "droplet":
      return <Droplet className={cls} />;
    case "sun":
      return <Sun className={cls} />;
    case "flame":
      return <Flame className={cls} />;
    case "brain":
      return <Brain className={cls} />;
    case "activity":
      return <Activity className={cls} />;
    default:
      return <Leaf className={cls} />;
  }
}

export const ResultView: React.FC<ResultViewProps> = ({
  plant,
  isSaved,
  demoNotice,
  onSave,
  onScanAgain,
  onBackHome,
}) => {
  const [imgError, setImgError] = useState(false);

  const shareText = [
    `*PlantMitra - Plant Identification*`,
    `Plant: ${plant.englishName} (${plant.kannadaName})`,
    `Scientific Name: ${plant.scientificName}`,
    `Match Confidence: ${plant.confidence}%`,
    ``,
    `About: ${plant.aboutEnglish}`,
    `ಮಾಹಿತಿ: ${plant.aboutKannada}`,
    ``,
    `Medicinal Uses / ಔಷಧೀಯ ಉಪಯೋಗಗಳು:`,
    ...plant.medicinalUses.map(
      (u, idx) => `${idx + 1}. ${u.english} (${u.kannada})`
    ),
    ``,
    `Note: This is for information only. Consult Doctor before using as medicine.`,
  ].join("\n");

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pb-24">
      {/* Top Action Strip */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          type="button"
          onClick={onBackHome}
          className="min-h-[44px] px-3 py-2 -ml-2 rounded-xl text-sm font-medium text-emerald-950/80 hover:text-emerald-950 hover:bg-emerald-950/5 inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="text-xs sm:text-sm text-emerald-900/70 font-medium tabular-nums truncate">
          <span>{plant.confidence}% Match</span>
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          <span className="font-kannada">ಶೇ. {plant.confidence} ಹೊಂದಾಣಿಕೆ</span>
        </div>
      </div>

      {/* Honest Demo / Fallback Notice if applicable */}
      {(demoNotice || plant.isDemo) && (
        <div className="mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3.5 flex items-start gap-3 text-sm text-emerald-950">
          <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">
              {demoNotice || "Demo Botanical Reference Mode"}
            </p>
            <p className="text-emerald-900/80 text-xs sm:text-sm mt-0.5">
              Showing curated bilingual medicinal data for{" "}
              <span className="font-medium">{plant.englishName}</span> (
              <span className="font-kannada">{plant.kannadaName}</span>).
            </p>
          </div>
        </div>
      )}

      {/* Hero Specimen Overview */}
      <section className="bg-white rounded-3xl border border-emerald-950/10 shadow-sm overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Plant Photo */}
          <div className="md:col-span-5 bg-[#EFF5F0] relative min-h-[260px] md:min-h-[340px]">
            {!imgError && plant.imageUrl ? (
              <img
                src={plant.imageUrl}
                alt={`${plant.englishName} (${plant.kannadaName}) botanical specimen`}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full min-h-[260px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/70 text-emerald-800">
                <Leaf className="w-12 h-12 mb-2 opacity-80" />
                <span className="text-sm font-semibold">{plant.englishName}</span>
                <span className="text-sm font-kannada mt-1">{plant.kannadaName}</span>
              </div>
            )}
          </div>

          {/* Plant Identity + 3-Line About (English + Kannada) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-emerald-800/80 mb-2">
                <span className="italic font-medium">{plant.scientificName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-emerald-800 tabular-nums">
                  {plant.confidence}% Match
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#111C14] tracking-tight text-balance">
                {plant.englishName}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-emerald-800 font-kannada mt-1 mb-5">
                {plant.kannadaName}
              </p>

              {/* About Plant - 3 lines English + Kannada */}
              <div className="space-y-4 border-t border-emerald-950/10 pt-5">
                <div>
                  <h2 className="text-xs font-semibold tracking-wide text-emerald-900/60 mb-1.5">
                    About Plant
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[#1E2B22]">
                    {plant.aboutEnglish}
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-semibold text-emerald-900/60 font-kannada mb-1.5">
                    ಸಸ್ಯದ ಕುರಿತು ಮಾಹಿತಿ
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[#1E2B22] font-kannada">
                    {plant.aboutKannada}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicinal Uses (5 Points with Icons) */}
      <section className="bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
          <h2 className="text-xl font-bold text-[#111C14]">
            Medicinal Uses
          </h2>
          <p className="text-base font-semibold text-emerald-800 font-kannada">
            ಔಷಧೀಯ ಉಪಯೋಗಗಳು
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plant.medicinalUses.slice(0, 5).map((use, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F6FAF7] border border-emerald-950/5"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-emerald-950/10 flex items-center justify-center shrink-0 mt-0.5">
                {renderUseIcon(use.icon)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#111C14] leading-snug">
                  {use.english}
                </p>
                <p className="text-sm text-emerald-900/85 font-kannada mt-1 leading-relaxed">
                  {use.kannada}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages (5 Points) & Disadvantages / Side Effects (4 Points) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Advantages */}
        <section className="bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-8">
          <div className="flex items-baseline justify-between gap-2 mb-5">
            <h2 className="text-xl font-bold text-[#111C14]">Advantages</h2>
            <span className="text-base font-semibold text-emerald-800 font-kannada">
              ಪ್ರಯೋಜನಗಳು
            </span>
          </div>

          <ul className="divide-y divide-emerald-950/10">
            {plant.advantages.slice(0, 5).map((item, idx) => (
              <li key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#111C14]">{item.english}</p>
                  <p className="text-sm text-emerald-900/80 font-kannada mt-1">
                    {item.kannada}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Disadvantages / Side Effects */}
        <section className="bg-white rounded-3xl border border-emerald-950/10 p-6 sm:p-8">
          <div className="flex items-baseline justify-between gap-2 mb-5">
            <h2 className="text-xl font-bold text-[#111C14]">
              Disadvantages & Side Effects
            </h2>
            <span className="text-base font-semibold text-amber-800 font-kannada">
              ಎಚ್ಚರಿಕೆ ಮತ್ತು ಅಡ್ಡಪರಿಣಾಮಗಳು
            </span>
          </div>

          <ul className="divide-y divide-emerald-950/10">
            {plant.disadvantages.slice(0, 4).map((item, idx) => (
              <li key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#111C14]">{item.english}</p>
                  <p className="text-sm text-[#4B381B] font-kannada mt-1">
                    {item.kannada}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* How to Use - Kashaya / Juice Preparation */}
      <section className="bg-[#F2F7F3] rounded-3xl border border-emerald-950/10 p-6 sm:p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#111C14]">
            {plant.howToUseTitleEnglish}
          </h2>
          <p className="text-base font-semibold text-emerald-800 font-kannada mt-1">
            {plant.howToUseTitleKannada}
          </p>
        </div>

        <ol className="space-y-4">
          {plant.howToUseSteps.map((step, idx) => (
            <li
              key={idx}
              className="bg-white rounded-2xl border border-emerald-950/10 p-4 sm:p-5 flex items-start gap-4"
            >
              <span className="w-8 h-8 rounded-xl bg-emerald-800 text-white text-sm font-bold tabular-nums flex items-center justify-center shrink-0">
                0{idx + 1}
              </span>
              <div>
                <p className="text-sm sm:text-[15px] font-medium text-[#111C14] leading-relaxed">
                  {step.english}
                </p>
                <p className="text-sm sm:text-[15px] text-emerald-900/85 font-kannada mt-1.5 leading-relaxed">
                  {step.kannada}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Medical Warning Box */}
      <section
        className="rounded-2xl bg-amber-50 border border-amber-300 p-5 sm:p-6 mb-8 flex items-start gap-4"
        role="note"
        aria-label="Medical Disclaimer"
      >
        <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm sm:text-base font-bold text-amber-950">
            This is for information only. Consult Doctor before using as medicine
          </p>
          <p className="text-sm sm:text-base font-medium text-amber-900 font-kannada mt-1">
            ಇದು ಕೇವಲ ಮಾಹಿತಿಗಾಗಿ ಮಾತ್ರ. ಔಷಧಿಯಾಗಿ ಬಳಸುವ ಮೊದಲು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.
          </p>
        </div>
      </section>

      {/* Bottom Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <button
          type="button"
          onClick={() => onSave(plant)}
          className={`min-h-[52px] px-5 py-3 rounded-2xl font-semibold text-sm inline-flex items-center justify-center gap-2.5 border transition-colors whitespace-nowrap ${
            isSaved
              ? "bg-emerald-100 border-emerald-300 text-emerald-950"
              : "bg-white border-emerald-950/15 text-[#111C14] hover:bg-emerald-50"
          }`}
        >
          {isSaved ? (
            <>
              <BookmarkCheck className="w-5 h-5 text-emerald-700" />
              <span>Saved to History</span>
            </>
          ) : (
            <>
              <Bookmark className="w-5 h-5 text-emerald-700" />
              <span>Save</span>
            </>
          )}
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[52px] px-5 py-3 rounded-2xl bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap"
        >
          <Share2 className="w-5 h-5" />
          <span>Share on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onScanAgain}
          className="min-h-[52px] px-5 py-3 rounded-2xl bg-emerald-950 hover:bg-emerald-900 text-white font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Scan Again</span>
        </button>
      </div>
    </div>
  );
};
