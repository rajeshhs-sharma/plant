export type IconKey =
  | "shield"
  | "heart"
  | "wind"
  | "sparkles"
  | "droplet"
  | "sun"
  | "flame"
  | "leaf"
  | "brain"
  | "activity";

export interface MedicinalUseItem {
  icon: IconKey | string;
  english: string;
  kannada: string;
}

export interface BilingualPoint {
  english: string;
  kannada: string;
}

export interface PlantScanResult {
  id: string;
  isPlant: boolean;
  confidence: number;
  englishName: string;
  kannadaName: string;
  scientificName: string;
  imageUrl: string;
  aboutEnglish: string;
  aboutKannada: string;
  medicinalUses: MedicinalUseItem[];
  advantages: BilingualPoint[];
  disadvantages: BilingualPoint[];
  howToUseTitleEnglish: string;
  howToUseTitleKannada: string;
  howToUseSteps: BilingualPoint[];
  isDemo?: boolean;
  scannedAt?: string;
}

export interface RecentScanItem extends PlantScanResult {
  savedAt: string;
}

export type AppView = "home" | "camera" | "identifying" | "result" | "not_identified";
