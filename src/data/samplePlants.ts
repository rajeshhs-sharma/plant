import type { PlantScanResult } from "../types.ts";

export const SAMPLE_PLANTS: PlantScanResult[] = [
  {
    id: "sample-tulsi",
    isPlant: true,
    confidence: 96,
    englishName: "Holy Basil (Tulsi)",
    kannadaName: "ತುಳಸಿ",
    scientificName: "Ocimum tenuiflorum",
    imageUrl: "/src/assets/images/tulsi_leaf_1795083939698.jpg",
    aboutEnglish:
      "Tulsi is a sacred aromatic herb widely grown in Indian courtyards and revered in Ayurveda as the Queen of Herbs. Its serrated green leaves carry natural essential oils like eugenol that support daily respiratory and immune wellness. Both Rama and Krishna varieties are valued across South India for gentle home remedies.",
    aboutKannada:
      "ತುಳಸಿ ಭಾರತೀಯ ಮನೆಗಳ ಅಂಗಳದಲ್ಲಿ ಬೆಳೆಯುವ ಪವಿತ್ರ ಮತ್ತು ಸುಗಂಧಭರಿತ ಔಷಧೀಯ ಸಸ್ಯವಾಗಿದೆ. ಇದನ್ನು ಆಯುರ್ವೇದದಲ್ಲಿ 'ಸಸ್ಯಗಳ ರಾಣಿ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಇದರ ಎಲೆಗಳಲ್ಲಿರುವ ನೈಸರ್ಗಿಕ ತೈಲಗಳು ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಮತ್ತು ಉಸಿರಾಟದ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
    medicinalUses: [
      {
        icon: "wind",
        english: "Relieves cough, cold, sore throat, and seasonal congestion.",
        kannada: "ಕೆಮ್ಮು, ಶೀತ, ಗಂಟಲು ನೋವು ಮತ್ತು ಕಫವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
      },
      {
        icon: "shield",
        english: "Boosts natural immunity against seasonal infections.",
        kannada: "ಋತುಮಾನದ ಸೋಂಕುಗಳ ವಿರುದ್ಧ ದೇಹದ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.",
      },
      {
        icon: "brain",
        english: "Acts as a natural adaptogen to ease mental stress and fatigue.",
        kannada: "ಮಾನಸಿಕ ಒತ್ತಡ ಮತ್ತು ಆಯಾಸವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      },
      {
        icon: "flame",
        english: "Helps soothe mild fever and supports healthy digestion.",
        kannada: "ಸಾಮಾನ್ಯ ಜ್ವರವನ್ನು ಶಮನಗೊಳಿಸಿ ಜೀರ್ಣಕ್ರಿಯೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ.",
      },
      {
        icon: "sparkles",
        english: "Supports oral freshness and gum hygiene when chewed fresh.",
        kannada: "ತಾಜಾ ಎಲೆಗಳನ್ನು ಜಗಿಯುವುದರಿಂದ ಬಾಯಿಯ ದುರ್ಗಂಧ ಮತ್ತು ವಸಡುಗಳ ಆರೋಗ್ಯಕ್ಕೆ ಒಳ್ಳೆಯದು.",
      },
    ],
    advantages: [
      {
        english: "Easy to grow in small home pots with minimal care.",
        kannada: "ಮನೆಯ ಸಣ್ಣ ಕುಂಡಗಳಲ್ಲಿ ಸುಲಭವಾಗಿ ಬೆಳೆಸಬಹುದು.",
      },
      {
        english: "Rich in antioxidants and soothing essential oils.",
        kannada: "ಆಂಟಿಆಕ್ಸಿಡೆಂಟ್ ಮತ್ತು ನೈಸರ್ಗಿಕ ಔಷಧೀಯ ತೈಲಗಳಿಂದ ಸಮೃದ್ಧವಾಗಿದೆ.",
      },
      {
        english: "Naturally freshens indoor air around the home.",
        kannada: "ಮನೆಯ ಸುತ್ತಮುತ್ತಲಿನ ಗಾಳಿಯನ್ನು ಶುದ್ಧವಾಗಿಡಲು ನೆರವಾಗುತ್ತದೆ.",
      },
      {
        english: "Pairs safely with ginger, black pepper, and honey in teas.",
        kannada: "ಶುಂಠಿ, ಕಾಳುಮೆಣಸು ಮತ್ತು ಜೇನುತುಪ್ಪದೊಂದಿಗೆ ಕಷಾಯದಲ್ಲಿ ಸುಲಭವಾಗಿ ಬಳಸಬಹುದು.",
      },
      {
        english: "Gentle herbal support suitable for daily wellness routines.",
        kannada: "ದೈನಂದಿನ ಆರೋಗ್ಯ ರಕ್ಷಣೆಗೆ ಉಪಯುಕ್ತವಾದ ಮೃದು ಗಿಡಮೂಲಿಕೆಯಾಗಿದೆ.",
      },
    ],
    disadvantages: [
      {
        english: "Excessive intake may lower blood sugar too much in diabetics.",
        kannada: "ಅತಿಯಾದ ಸೇವನೆಯಿಂದ ಸಕ್ಕರೆ ಕಾಯಿಲೆ ಇರುವವರಲ್ಲಿ ರಕ್ತದ ಸಕ್ಕರೆ ಪ್ರಮಾಣ ತೀರಾ ಕಡಿಮೆಯಾಗಬಹುದು.",
      },
      {
        english: "Can mildly thin blood; avoid high doses before surgery.",
        kannada: "ರಕ್ತ ತೆಳುವಾಗುವ ಗುಣವಿರುವುದರಿಂದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಮುನ್ನ ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದಲ್ಲಿ ಸೇವಿಸಬಾರದು.",
      },
      {
        english: "Pregnant or nursing women should avoid concentrated extracts.",
        kannada: "ಗರ್ಭಿಣಿಯರು ಮತ್ತು ಹಾಲುಣಿಸುವ ತಾಯಂದಿರು ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದ ಸೇವನೆ ತಪ್ಪಿಸಬೇಕು.",
      },
      {
        english: "Chewing leaves directly every day may affect tooth enamel due to mild acidity.",
        kannada: "ಪ್ರತಿದಿನ ನೇರವಾಗಿ ಎಲೆಗಳನ್ನು ಜಗಿಯುವುದರಿಂದ ಹಲ್ಲುಗಳ ಎನಾಮೆಲ್ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದು.",
      },
    ],
    howToUseTitleEnglish: "How to Make Tulsi Kashaya (Herbal Decoction)",
    howToUseTitleKannada: "ತುಳಸಿ ಕಷಾಯ ತಯಾರಿಸುವ ವಿಧಾನ",
    howToUseSteps: [
      {
        english: "Wash 8 to 10 fresh Tulsi leaves thoroughly in clean water.",
        kannada: "8 ರಿಂದ 10 ತಾಜಾ ತುಳಸಿ ಎಲೆಗಳನ್ನು ಶುದ್ಧ ನೀರಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ.",
      },
      {
        english: "Crush 1 small piece of fresh ginger and 3 black peppercorns.",
        kannada: "ಒಂದು ಸಣ್ಣ ತುಂಡು ಹಸಿ ಶುಂಠಿ ಮತ್ತು 3 ಕಾಳುಮೆಣಸನ್ನು ಕುಟ್ಟಿ ಪುಡಿಮಾಡಿ.",
      },
      {
        english: "Boil 2 cups of water with the Tulsi leaves, ginger, and pepper for 6–8 minutes until reduced to 1 cup.",
        kannada: "2 ಕಪ್ ನೀರಿಗೆ ತುಳಸಿ ಎಲೆ, ಶುಂಠಿ ಮತ್ತು ಮೆಣಸು ಹಾಕಿ 6–8 ನಿಮಿಷಗಳ ಕಾಲ 1 ಕಪ್ ಆಗುವವರೆಗೆ ಕುದಿಸಿ.",
      },
      {
        english: "Strain the warm decoction into a cup and let it cool slightly.",
        kannada: "ಕುದಿಸಿದ ಕಷಾಯವನ್ನು ಸೋಸಿ ಲೋಟಕ್ಕೆ ಹಾಕಿ ಸ್ವಲ್ಪ ಬೆಚ್ಚಗಾಗಲು ಬಿಡಿ.",
      },
      {
        english: "Add 1 teaspoon of pure honey if desired and sip warm.",
        kannada: "ರುಚಿಗೆ ತಕ್ಕಂತೆ 1 ಚಮಚ ಶುದ್ಧ ಜೇನುತುಪ್ಪ ಸೇರಿಸಿ ಬೆಚ್ಚಗಿರುವಾಗ ಕುಡಿಯಿರಿ.",
      },
    ],
    isDemo: true,
  },
  {
    id: "sample-neem",
    isPlant: true,
    confidence: 95,
    englishName: "Neem",
    kannadaName: "ಬೇವು",
    scientificName: "Azadirachta indica",
    imageUrl: "/src/assets/images/neem_leaf_1795083939448.jpg",
    aboutEnglish:
      "Neem is a resilient evergreen tree native to the Indian subcontinent, cherished as a natural pharmacy in traditional households. Its compound serrated leaves contain potent bitter compounds like azadirachtin with strong cleansing properties. From skin care to oral hygiene, nearly every part of the tree serves practical wellness needs.",
    aboutKannada:
      "ಬೇವು ಭಾರತೀಯ ಉಪಖಂಡದ ಪ್ರಮುಖ ನಿತ್ಯಹರಿದ್ವರ್ಣದ ಔಷಧೀಯ ಮರವಾಗಿದೆ. ಇದರ ಕಹಿಯಾದ ಎಲೆಗಳಲ್ಲಿ ಬ್ಯಾಕ್ಟೀರಿಯಾ ವಿರೋಧಿ ಮತ್ತು ಶುದ್ಧೀಕರಣ ಗುಣಗಳಿವೆ. ಚರ್ಮದ ಆರೈಕೆ, ಹಲ್ಲುಗಳ ರಕ್ಷಣೆ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಬಳಕೆಗೆ ಬೇವು ಶತಮಾನಗಳಿಂದಲೂ ಹೆಸರುವಾಸಿಯಾಗಿದೆ.",
    medicinalUses: [
      {
        icon: "sparkles",
        english: "Helps manage acne, minor skin rashes, and fungal irritation.",
        kannada: "ಮೊಡವೆ, ಚರ್ಮದ ದದ್ದುಗಳು ಮತ್ತು ತುರಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      },
      {
        icon: "shield",
        english: "Strong natural antibacterial and antifungal leaf extracts.",
        kannada: "ಬಲವಾದ ನೈಸರ್ಗಿಕ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಮತ್ತು ಶಿಲೀಂಧ್ರ ವಿರೋಧಿ ಗುಣಗಳನ್ನು ಹೊಂದಿದೆ.",
      },
      {
        icon: "droplet",
        english: "Traditionally used in small supervised doses to support blood purification.",
        kannada: "ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ರಕ್ತ ಶುದ್ಧೀಕರಣಕ್ಕಾಗಿ ಮಿತವಾದ ಪ್ರಮಾಣದಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.",
      },
      {
        icon: "activity",
        english: "Supports scalp health and helps reduce dandruff when used as a rinse.",
        kannada: "ತಲೆಹೊಟ್ಟು ಕಡಿಮೆ ಮಾಡಿ ಕೂದಲಿನ ಬುಡವನ್ನು ಆರೋಗ್ಯವಾಗಿಡುತ್ತದೆ.",
      },
      {
        icon: "leaf",
        english: "Promotes oral hygiene and helps soothe inflamed gums.",
        kannada: "ಬಾಯಿ ಮತ್ತು ವಸಡುಗಳ ಆರೋಗ್ಯವನ್ನು ಕಾಪಾಡಲು ಉಪಯುಕ್ತವಾಗಿದೆ.",
      },
    ],
    advantages: [
      {
        english: "Readily available across rural and urban Karnataka.",
        kannada: "ಕರ್ನಾಟಕದ ಹಳ್ಳಿ ಮತ್ತು ನಗರ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸುಲಭವಾಗಿ ಸಿಗುತ್ತದೆ.",
      },
      {
        english: "Effective for external herbal pastes, bath water, and hair rinses.",
        kannada: "ಸ್ನಾನದ ನೀರು, ಲೇಪನ ಮತ್ತು ತಲೆ ತೊಳೆಯಲು ಅತ್ಯುತ್ತಮವಾಗಿದೆ.",
      },
      {
        english: "Acts as a safe natural garden pest repellent.",
        kannada: "ತೋಟದ ಗಿಡಗಳಿಗೆ ನೈಸರ್ಗಿಕ ಕೀಟನಾಶಕವಾಗಿಯೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ.",
      },
      {
        english: "Long shelf life when leaves are shade-dried and powdered.",
        kannada: "ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ ಪುಡಿ ಮಾಡಿಟ್ಟರೆ ದೀರ್ಘಕಾಲ ಬಾಳಿಕೆ ಬರುತ್ತದೆ.",
      },
      {
        english: "Supports seasonal detox routines like Ugadi Bevu-Bella tradition.",
        kannada: "ಯುಗಾದಿಯ ಬೇವು-ಬೆಲ್ಲದಂತೆ ಋತುಮಾನದ ಆರೋಗ್ಯ ಸಮತೋಲನಕ್ಕೆ ಪೂರಕವಾಗಿದೆ.",
      },
    ],
    disadvantages: [
      {
        english: "Very bitter taste; large internal doses can irritate the stomach.",
        kannada: "ಅತಿ ಕಹಿಯಾಗಿರುವುದರಿಂದ ಹೆಚ್ಚು ಸೇವಿಸಿದರೆ ಹೊಟ್ಟೆ ಕಿರಿಕಿರಿ ಉಂಟಾಗಬಹುದು.",
      },
      {
        english: "Strictly avoid internal consumption during pregnancy or in young children.",
        kannada: "ಗರ್ಭಿಣಿಯರು ಮತ್ತು ಚಿಕ್ಕ ಮಕ್ಕಳು ಒಳ ಸೇವನೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸಬೇಕು.",
      },
      {
        english: "May lower blood sugar levels excessively if combined with diabetes medicines.",
        kannada: "ಮಧುಮೇಹದ ಔಷಧಿಗಳೊಂದಿಗೆ ಸೇವಿಸಿದರೆ ರಕ್ತದ ಸಕ್ಕರೆ ಮಟ್ಟ ತೀರಾ ಇಳಿಯಬಹುದು.",
      },
      {
        english: "Prolonged high internal use can strain liver or kidney function.",
        kannada: "ದೀರ್ಘಕಾಲ ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದಲ್ಲಿ ಸೇವಿಸುವುದು ಯಕೃತ್ತು ಮತ್ತು ಮೂತ್ರಪಿಂಡಕ್ಕೆ ಒಳ್ಳೆಯದಲ್ಲ.",
      },
    ],
    howToUseTitleEnglish: "How to Make Neem Leaf Herbal Wash & Mild Juice",
    howToUseTitleKannada: "ಬೇವಿನ ಎಲೆಯ ರಸ ಮತ್ತು ಶುದ್ಧೀಕರಣ ಕಷಾಯ ವಿಧಾನ",
    howToUseSteps: [
      {
        english: "Collect a small handful of tender, clean Neem leaves and wash thoroughly.",
        kannada: "ಒಂದು ಹಿಡಿ ಎಳೆಯ ಮತ್ತು ಸ್ವಚ್ಛವಾದ ಬೇವಿನ ಎಲೆಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ.",
      },
      {
        english: "For external skin/scalp wash: boil 15–20 leaves in 3 cups of water for 10 minutes and cool.",
        kannada: "ಚರ್ಮ ಅಥವಾ ತಲೆ ತೊಳೆಯಲು: 15–20 ಎಲೆಗಳನ್ನು 3 ಕಪ್ ನೀರಿನಲ್ಲಿ 10 ನಿಮಿಷ ಕುದಿಸಿ ತಣಿಸಿ.",
      },
      {
        english: "For mild occasional juice: grind 4–5 tender leaves with 30 ml water and strain well.",
        kannada: "ಮಿತವಾದ ರಸಕ್ಕಾಗಿ: 4–5 ಎಳೆಯ ಎಲೆಗಳನ್ನು 30 ಮಿ.ಲೀ ನೀರಿನೊಂದಿಗೆ ರುಬ್ಬಿ ಸೋಸಿಕೊಳ್ಳಿ.",
      },
      {
        english: "Consume no more than 1–2 teaspoons diluted in water only after medical guidance.",
        kannada: "ವೈದ್ಯರ ಸಲಹೆಯ ನಂತರವೇ 1–2 ಚಮಚದಷ್ಟು ಮಾತ್ರ ನೀರಿನಲ್ಲಿ ಬೆರೆಸಿ ಬಳಸಿ.",
      },
    ],
    isDemo: true,
  },
  {
    id: "sample-aloe",
    isPlant: true,
    confidence: 97,
    englishName: "Aloe Vera",
    kannadaName: "ಲೋಳೆಸರ",
    scientificName: "Aloe barbadensis miller",
    imageUrl: "/src/assets/images/aloe_vera_leaf_1795083939888.jpg",
    aboutEnglish:
      "Aloe Vera is a hardy succulent prized for its thick, water-rich leaves filled with soothing translucent gel. It thrives in sunny balconies with minimal watering and is a staple in Indian skin care and Ayurvedic formulations. The inner clear gel cools sunburns, hydrates dry skin, and supports gentle digestive balance.",
    aboutKannada:
      "ಲೋಳೆಸರ (ಅಲೋವೆರಾ) ದಪ್ಪವಾದ ರಸಭರಿತ ಎಲೆಗಳನ್ನು ಹೊಂದಿರುವ ಔಷಧೀಯ ಸಸ್ಯವಾಗಿದೆ. ಇದರ ಎಲೆಗಳ ಒಳಗಿರುವ ಪಾರದರ್ಶಕ ಜೆಲ್ ಚರ್ಮಕ್ಕೆ ತಂಪು ನೀಡಲು ಮತ್ತು ತೇವಾಂಶ ಕಾಪಾಡಲು ಅತ್ಯುತ್ತಮವಾಗಿದೆ. ಬಿಸಿಲು ಗಾಯ, ಚರ್ಮದ ಒಣಗುವಿಕೆ ಮತ್ತು ಜೀರ್ಣಕ್ರಿಯೆಯ ಸಮತೋಲನಕ್ಕೆ ಇದು ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲ್ಪಡುತ್ತದೆ.",
    medicinalUses: [
      {
        icon: "sun",
        english: "Soothes sunburn, minor kitchen burns, and skin redness rapidly.",
        kannada: "ಬಿಸಿಲಿನ ಸುಟ್ಟಗಾಯ, ಸಣ್ಣ ಗಾಯ ಮತ್ತು ಚರ್ಮದ ಉರಿಯನ್ನು ತಕ್ಷಣ ಶಮನಗೊಳಿಸುತ್ತದೆ.",
      },
      {
        icon: "droplet",
        english: "Deeply moisturizes dry skin without feeling greasy.",
        kannada: "ಒಣ ಚರ್ಮಕ್ಕೆ ಜಿಡ್ಡಿಲ್ಲದೆ ಆಳವಾದ ತೇವಾಂಶವನ್ನು ನೀಡುತ್ತದೆ.",
      },
      {
        icon: "flame",
        english: "Helps cool mild acidity and heartburn when inner gel is properly washed.",
        kannada: "ಒಳಗಿನ ಜೆಲ್ ಅನ್ನು ಸರಿಯಾಗಿ ತೊಳೆದು ಬಳಸಿದರೆ ಆಮ್ಲಪಿತ್ತ ಮತ್ತು ಹೊಟ್ಟೆ ಉರಿಯನ್ನು ತಣಿಸುತ್ತದೆ.",
      },
      {
        icon: "sparkles",
        english: "Calms scalp itchiness and adds natural softness to hair.",
        kannada: "ತಲೆಯ ತುರಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಕೂದಲಿಗೆ ನೈಸರ್ಗಿಕ ಮೃದುತ್ವ ನೀಡುತ್ತದೆ.",
      },
      {
        icon: "activity",
        english: "Supports minor wound recovery and skin barrier repair.",
        kannada: "ಸಣ್ಣ ಗಾಯಗಳು ಬೇಗ ವಾಸಿಯಾಗಲು ಮತ್ತು ಚರ್ಮದ ರಕ್ಷಣೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      },
    ],
    advantages: [
      {
        english: "Requires very little water and grows easily on sunny windowsills.",
        kannada: "ಕಡಿಮೆ ನೀರಿನಲ್ಲಿ ಬಾಲ್ಕನಿ ಅಥವಾ ಕಿಟಕಿ ಬಳಿ ಸುಲಭವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
      },
      {
        english: "Fresh gel works immediately for cooling topical skin care.",
        kannada: "ತಾಜಾ ಜೆಲ್ ಅನ್ನು ನೇರವಾಗಿ ಚರ್ಮದ ಮೇಲೆ ಹಚ್ಚಲು ತಕ್ಷಣ ಬಳಸಬಹುದು.",
      },
      {
        english: "Contains vitamins A, C, E, and soothing polysaccharides.",
        kannada: "ವಿಟಮಿನ್ ಎ, ಸಿ, ಇ ಮತ್ತು ಚರ್ಮಕ್ಕೆ ಹಿತಕರವಾದ ಪೋಷಕಾಂಶಗಳನ್ನು ಹೊಂದಿದೆ.",
      },
      {
        english: "Naturally gentle and fragrance-free for sensitive skin types.",
        kannada: "ಸೂಕ್ಷ್ಮ ಚರ್ಮದವರಿಗೂ ನೈಸರ್ಗಿಕ ಮತ್ತು ಮೃದುವಾದ ಆರೈಕೆ ನೀಡುತ್ತದೆ.",
      },
      {
        english: "Versatile base for homemade hair masks and cooling drinks.",
        kannada: "ಕೂದಲಿನ ಪ್ಯಾಕ್ ಮತ್ತು ತಂಪು ಪಾನೀಯಗಳಲ್ಲಿ ಬಹುಮುಖವಾಗಿ ಬಳಸಬಹುದು.",
      },
    ],
    disadvantages: [
      {
        english: "The yellow sap (aloin) near the green rind can cause strong stomach cramps and diarrhea.",
        kannada: "ಹಸಿರು ಸಿಪ್ಪೆಯ ಕೆಳಗಿರುವ ಹಳದಿ ರಸ (ಅಲೋಯಿನ್) ಹೊಟ್ಟೆ ನೋವು ಮತ್ತು ಭೇದಿಗೆ ಕಾರಣವಾಗಬಹುದು.",
      },
      {
        english: "Some individuals may develop mild skin allergy; patch test before applying.",
        kannada: "ಕೆಲವರಲ್ಲಿ ಚರ್ಮದ ಅಲರ್ಜಿ ಉಂಟಾಗಬಹುದು; ಹಚ್ಚುವ ಮೊದಲು ಸಣ್ಣ ಭಾಗದಲ್ಲಿ ಪರೀಕ್ಷಿಸಿ.",
      },
      {
        english: "Oral aloe latex or unwashed gel should be avoided during pregnancy.",
        kannada: "ಗರ್ಭಿಣಿಯರು ಲೋಳೆಸರವನ್ನು ಒಳ ಸೇವನೆ ಮಾಡಬಾರದು.",
      },
      {
        english: "Can interact with blood sugar or diuretic medications if taken orally.",
        kannada: "ಸಕ್ಕರೆ ಕಾಯಿಲೆ ಅಥವಾ ಮೂತ್ರವರ್ಧಕ ಔಷಧಿ ಸೇವಿಸುವವರು ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಬೇಕು.",
      },
    ],
    howToUseTitleEnglish: "How to Prepare Safe Aloe Vera Cooling Juice",
    howToUseTitleKannada: "ಸುರಕ್ಷಿತ ಲೋಳೆಸರ ಜ್ಯೂಸ್ ತಯಾರಿಸುವ ವಿಧಾನ",
    howToUseSteps: [
      {
        english: "Cut one mature outer leaf and stand it upright for 15 minutes so the bitter yellow sap drains out.",
        kannada: "ಬಲಿತ ಒಂದು ಎಲೆಯನ್ನು ಕತ್ತರಿಸಿ 15 ನಿಮಿಷ ನಿಲ್ಲಿಸಿ ಅದರಲ್ಲಿರುವ ಕಹಿ ಹಳದಿ ರಸವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆಯಿರಿ.",
      },
      {
        english: "Slice off the thorny edges and green outer peel carefully with a clean knife.",
        kannada: "ಚಾಕುವಿನಿಂದ ಬದಿಯ ಮುಳ್ಳುಗಳು ಮತ್ತು ಹಸಿರು ಸಿಪ್ಪೆಯನ್ನು ಜಾಗರೂಕತೆಯಿಂದ ತೆಗೆಯಿರಿ.",
      },
      {
        english: "Scoop out 2 tablespoons of clear inner gel and rinse it 3 times in fresh drinking water.",
        kannada: "ಒಳಗಿನ 2 ಚಮಚ ಪಾರದರ್ಶಕ ಜೆಲ್ ತೆಗೆದು ಶುದ್ಧ ಕುಡಿಯುವ ನೀರಿನಲ್ಲಿ 3 ಬಾರಿ ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ.",
      },
      {
        english: "Blend the washed gel with 1 glass of water, a pinch of cumin powder, and a few drops of lemon.",
        kannada: "ತೊಳೆದ ಜೆಲ್ ಅನ್ನು 1 ಲೋಟ ನೀರು, ಚಿಟಿಕೆ ಜೀರಿಗೆ ಪುಡಿ ಮತ್ತು ಸ್ವಲ್ಪ ನಿಂಬೆ ರಸದೊಂದಿಗೆ ಮಿಕ್ಸಿ ಮಾಡಿ.",
      },
      {
        english: "Drink fresh in the morning on an empty stomach occasionally.",
        kannada: "ತಾಜಾವಾಗಿರುವಾಗ ಬೆಳಿಗ್ಗೆ ಖಾಲಿ ಹೊಟ್ಟೆಯಲ್ಲಿ ಮಿತವಾಗಿ ಸೇವಿಸಿ.",
      },
    ],
    isDemo: true,
  },
  {
    id: "sample-mango",
    isPlant: true,
    confidence: 94,
    englishName: "Mango Leaf",
    kannadaName: "ಮಾವಿನ ಎಲೆ",
    scientificName: "Mangifera indica",
    imageUrl: "/src/assets/images/mango_leaf_1795083939191.jpg",
    aboutEnglish:
      "Mango leaves are glossy, lance-shaped leaves that shift from tender copper-red to deep green as they mature. Beyond their auspicious role in Indian festivals and doorway toranas, tender mango leaves are rich in mangiferin and polyphenols. Traditional wellness practices value them in mild decoctions for metabolic and throat support.",
    aboutKannada:
      "ಮಾವಿನ ಎಲೆಗಳು ಹಬ್ಬ-ಹರಿದಿನಗಳಲ್ಲಿ ತೋರಣ ಕಟ್ಟಲು ಬಳಸುವ ಮಂಗಳಕರ ಎಲೆಗಳಷ್ಟೇ ಅಲ್ಲ, ಉತ್ತಮ ಔಷಧೀಯ ಗುಣಗಳನ್ನೂ ಹೊಂದಿವೆ. ಎಳೆಯ ತಾಮ್ರ ಬಣ್ಣದ ಎಲೆಗಳಲ್ಲಿ ಮ್ಯಾಂಗಿಫೆರಿನ್ ಎಂಬ ಶಕ್ತಿಶಾಲಿ ಆಂಟಿಆಕ್ಸಿಡೆಂಟ್ ಇರುತ್ತದೆ. ಸಾಂಪ್ರದಾಯಿಕ ಆರೈಕೆಯಲ್ಲಿ ಇದನ್ನು ಕಷಾಯ ಮತ್ತು ಬಾಯಿಯ ಸ್ವಚ್ಛತೆಗೆ ಬಳಸಲಾಗುತ್ತದೆ.",
    medicinalUses: [
      {
        icon: "heart",
        english: "Contains mangiferin antioxidants that support healthy blood sugar regulation.",
        kannada: "ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವನ್ನು ಸಮತೋಲನದಲ್ಲಿಡಲು ಸಹಾಯ ಮಾಡುವ ಅಂಶಗಳನ್ನು ಹೊಂದಿದೆ.",
      },
      {
        icon: "wind",
        english: "Warm leaf decoction gargle helps soothe mild throat irritation.",
        kannada: "ಬೆಚ್ಚಗಿನ ಎಲೆಯ ಕಷಾಯದಿಂದ ಬಾಯಿ ಮುಕ್ಕಳಿಸಿದರೆ ಗಂಟಲು ಕಿರಿಕಿರಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
      },
      {
        icon: "droplet",
        english: "Supports gentle digestive comfort and eases mild stomach heaviness.",
        kannada: "ಜೀರ್ಣಕ್ರಿಯೆಗೆ ನೆರವಾಗಿ ಹೊಟ್ಟೆಯ ಭಾರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      },
      {
        icon: "shield",
        english: "Rich in vitamin C and flavonoids that support blood vessel health.",
        kannada: "ವಿಟಮಿನ್ ಸಿ ಮತ್ತು ಫ್ಲೇವನಾಯ್ಡ್‌ಗಳಿಂದ ರಕ್ತನಾಳಗಳ ಆರೋಗ್ಯಕ್ಕೆ ಪೂರಕವಾಗಿದೆ.",
      },
      {
        icon: "sparkles",
        english: "Young tender leaf infusion helps maintain healthy gums and teeth.",
        kannada: "ಎಳೆಯ ಎಲೆಗಳ ಬಳಕೆಯು ವಸಡು ಮತ್ತು ಹಲ್ಲುಗಳ ಬಲವರ್ಧನೆಗೆ ಸಹಾಯಕವಾಗಿದೆ.",
      },
    ],
    advantages: [
      {
        english: "Abundantly available across gardens, farms, and avenues in India.",
        kannada: "ತೋಟಗಳಲ್ಲಿ, ಹೊಲಗಳಲ್ಲಿ ಮತ್ತು ಮನೆಯ ಸುತ್ತಮುತ್ತ ಸುಲಭವಾಗಿ ಸಿಗುತ್ತದೆ.",
      },
      {
        english: "Easy to shade-dry and store as tender leaf powder.",
        kannada: "ಎಳೆಯ ಎಲೆಗಳನ್ನು ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ ಪುಡಿ ಮಾಡಿ ಸಂಗ್ರಹಿಸಬಹುದು.",
      },
      {
        english: "Natural polyphenol antioxidants support overall cellular protection.",
        kannada: "ನೈಸರ್ಗಿಕ ಆಂಟಿಆಕ್ಸಿಡೆಂಟ್‌ಗಳು ದೇಹದ ಕೋಶಗಳ ರಕ್ಷಣೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
      },
      {
        english: "Pleasant mild resinous aroma when brewed as a light herbal tea.",
        kannada: "ಕಷಾಯ ಮಾಡಿದಾಗ ಸೌಮ್ಯವಾದ ನೈಸರ್ಗಿಕ ಸುವಾಸನೆಯನ್ನು ನೀಡುತ್ತದೆ.",
      },
      {
        english: "Culturally valued and widely recognized in every household.",
        kannada: "ಪ್ರತಿ ಮನೆಯಲ್ಲೂ ಪರಿಚಿತವಿರುವ ಮತ್ತು ಸುಲಭವಾಗಿ ಗುರುತಿಸಬಹುದಾದ ಸಸ್ಯವಾಗಿದೆ.",
      },
    ],
    disadvantages: [
      {
        english: "Sap from freshly plucked stems contains urushiol-like compounds that can irritate sensitive skin.",
        kannada: "ತಾಜಾ ತೊಟ್ಟಿನಿಂದ ಬರುವ ಹಾಲು ಸೂಕ್ಷ್ಮ ಚರ್ಮದವರಲ್ಲಿ ತುರಿಕೆ ಅಥವಾ ಅಲರ್ಜಿ ಉಂಟುಮಾಡಬಹುದು.",
      },
      {
        english: "Excess consumption may cause mild constipation or stomach dryness.",
        kannada: "ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದಲ್ಲಿ ಸೇವಿಸಿದರೆ ಮಲಬದ್ಧತೆ ಉಂಟಾಗಬಹುದು.",
      },
      {
        english: "People taking diabetes medication must monitor glucose closely to avoid low sugar.",
        kannada: "ಮಧುಮೇಹ ಔಷಧಿ ಸೇವಿಸುವವರು ರಕ್ತದ ಸಕ್ಕರೆ ಅತಿಯಾಗಿ ಇಳಿಯದಂತೆ ಎಚ್ಚರ ವಹಿಸಬೇಕು.",
      },
      {
        english: "Always wash leaves carefully to remove dust, tree sap, or orchard sprays.",
        kannada: "ಧೂಳು ಮತ್ತು ಕೀಟನಾಶಕಗಳ ನಿವಾರಣೆಗೆ ಎಲೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ತೊಳೆದೇ ಬಳಸಬೇಕು.",
      },
    ],
    howToUseTitleEnglish: "How to Make Tender Mango Leaf Kashaya (Infusion)",
    howToUseTitleKannada: "ಎಳೆಯ ಮಾವಿನ ಎಲೆಯ ಕಷಾಯ ತಯಾರಿಸುವ ವಿಧಾನ",
    howToUseSteps: [
      {
        english: "Pick 4 to 5 clean, tender mango leaves and wash them well under running water.",
        kannada: "4 ರಿಂದ 5 ಶುದ್ಧವಾದ ಎಳೆಯ ಮಾವಿನ ಎಲೆಗಳನ್ನು ಆರಿಸಿ ಹರಿಯುವ ನೀರಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ.",
      },
      {
        english: "Tear the leaves into small pieces and place them in 2 cups of water.",
        kannada: "ಎಲೆಗಳನ್ನು ಸಣ್ಣ ತುಂಡುಗಳಾಗಿ ಹರಿದು 2 ಕಪ್ ನೀರಿನಲ್ಲಿ ಹಾಕಿ.",
      },
      {
        english: "Simmer gently on low flame for 8–10 minutes until the water turns pale golden-green.",
        kannada: "ಕಡಿಮೆ ಉರಿಯಲ್ಲಿ 8–10 ನಿಮಿಷಗಳ ಕಾಲ ನೀರು ತಿಳಿ ಹಸಿರು-ಹಳದಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವವರೆಗೆ ಕುದಿಸಿ.",
      },
      {
        english: "Turn off the heat, cover for 5 minutes, and strain into a cup.",
        kannada: "ಒಲೆಯನ್ನು ಆರಿಸಿ 5 ನಿಮಿಷ ಮುಚ್ಚಿಡಿ, ನಂತರ ಶುದ್ಧ ಬಟ್ಟೆ ಅಥವಾ ಸೋಸುಗದಿಂದ ಸೋಸಿ.",
      },
      {
        english: "Sip half a cup warm in the morning or use lukewarm infusion as a soothing gargle.",
        kannada: "ಬೆಚ್ಚಗಿರುವಾಗ ಅರ್ಧ ಕಪ್ ಕುಡಿಯಿರಿ ಅಥವಾ ಗಂಟಲಿನ ಹಿತಕ್ಕಾಗಿ ಬಾಯಿ ಮುಕ್ಕಳಿಸಲು ಬಳಸಿ.",
      },
    ],
    isDemo: true,
  },
  {
    id: "sample-mint",
    isPlant: true,
    confidence: 96,
    englishName: "Mint (Pudina)",
    kannadaName: "ಪುದೀನಾ",
    scientificName: "Mentha spicata",
    imageUrl: "/src/assets/images/mint_leaf_1795083939718.jpg",
    aboutEnglish:
      "Mint (Pudina) is a fast-growing, fragrant kitchen herb recognized by its square stems and crinkled serrated leaves. Its natural menthol and carvone oils deliver an instant cooling sensation that refreshes the palate and calms digestion. Widely used in chutneys, summer drinks, and herbal infusions, it is one of the gentlest household remedies.",
    aboutKannada:
      "ಪುದೀನಾ ಸುಗಂಧಭರಿತ ಅಡುಗೆಮನೆ ಮತ್ತು ಔಷಧೀಯ ಸಸ್ಯವಾಗಿದ್ದು, ಚೌಕಾಕಾರದ ಕಾಂಡ ಮತ್ತು ಸುಕ್ಕುಗಟ್ಟಿದ ಹಸಿರು ಎಲೆಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಇದರಲ್ಲಿರುವ ನೈಸರ್ಗಿಕ ಮೆಂಥಾಲ್ ಅಂಶವು ದೇಹಕ್ಕೆ ತಂಪು ನೀಡಿ ಜೀರ್ಣಕ್ರಿಯೆಯನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ. ಚಟ್ನಿ, ಜ್ಯೂಸ್ ಮತ್ತು ಕಷಾಯಗಳಲ್ಲಿ ಇದನ್ನು ದಿನನಿತ್ಯ ಬಳಸಲಾಗುತ್ತದೆ.",
    medicinalUses: [
      {
        icon: "flame",
        english: "Relieves indigestion, gas, bloating, and post-meal heaviness.",
        kannada: "ಅಜೀರ್ಣ, ಗ್ಯಾಸ್, ಹೊಟ್ಟೆ ಉಬ್ಬರ ಮತ್ತು ಊಟದ ನಂತರದ ಭಾರವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
      },
      {
        icon: "wind",
        english: "Cooling aroma helps clear mild nasal stuffiness and eases nausea.",
        kannada: "ಇದರ ತಂಪಾದ ಸುವಾಸನೆ ಮೂಗು ಕಟ್ಟುವಿಕೆ ಮತ್ತು ವಾಕರಿಕೆಯನ್ನು ಶಮನಗೊಳಿಸುತ್ತದೆ.",
      },
      {
        icon: "brain",
        english: "Refreshing scent helps ease mild tension headaches and mental fatigue.",
        kannada: "ತಾಜಾ ಸುವಾಸನೆಯು ಸೌಮ್ಯ ತಲೆನೋವು ಮತ್ತು ಆಯಾಸವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನೆರವಾಗುತ್ತದೆ.",
      },
      {
        icon: "sparkles",
        english: "Naturally freshens breath and combats oral odor-causing bacteria.",
        kannada: "ಬಾಯಿಯ ದುರ್ವಾಸನೆಯನ್ನು ಹೋಗಲಾಡಿಸಿ ತಾಜಾತನವನ್ನು ನೀಡುತ್ತದೆ.",
      },
      {
        icon: "sun",
        english: "Cools the body naturally during hot summer afternoons.",
        kannada: "ಬೇಸಿಗೆಯ ಬಿಸಿಲಿನಲ್ಲಿ ದೇಹವನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ತಂಪಾಗಿಡುತ್ತದೆ.",
      },
    ],
    advantages: [
      {
        english: "Grows rapidly in small kitchen pots or even water jars.",
        kannada: "ಮನೆಯ ಸಣ್ಣ ಕುಂಡಗಳಲ್ಲಿ ಬಹಳ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
      },
      {
        english: "Safe, refreshing culinary flavor loved by both children and elders.",
        kannada: "ಮಕ್ಕಳಿಂದ ಹಿಡಿದು ಹಿರಿಯರವರೆಗೂ ಎಲ್ಲರಿಗೂ ಇಷ್ಟವಾಗುವ ಸುರಕ್ಷಿತ ರುಚಿ ಹೊಂದಿದೆ.",
      },
      {
        english: "Zero calories and rich in vitamin A, manganese, and antioxidants.",
        kannada: "ಕಡಿಮೆ ಕ್ಯಾಲೋರಿ ಹೊಂದಿದ್ದು ವಿಟಮಿನ್ ಎ ಮತ್ತು ಆಂಟಿಆಕ್ಸಿಡೆಂಟ್‌ಗಳಿಂದ ಸಮೃದ್ಧವಾಗಿದೆ.",
      },
      {
        english: "Pairs effortlessly with lemon, ginger, buttermilk, and cumin.",
        kannada: "ನಿಂಬೆ, ಶುಂಠಿ, ಮಜ್ಜಿಗೆ ಮತ್ತು ಜೀರಿಗೆಯೊಂದಿಗೆ ಸುಲಭವಾಗಿ ಬೆರೆಯುತ್ತದೆ.",
      },
      {
        english: "Instant soothing steam or tea preparation in under 5 minutes.",
        kannada: "5 ನಿಮಿಷದೊಳಗೆ ಕಷಾಯ ಅಥವಾ ತಂಪು ಪಾನೀಯವಾಗಿ ತಯಾರಿಸಬಹುದು.",
      },
    ],
    disadvantages: [
      {
        english: "May trigger heartburn or acid reflux in people with severe GERD.",
        kannada: "ತೀವ್ರ ಆಮ್ಲಪಿತ್ತ (GERD) ಸಮಸ್ಯೆ ಇರುವವರಲ್ಲಿ ಎದೆಯುರಿ ಹೆಚ್ಚಾಗಬಹುದು.",
      },
      {
        english: "Strong concentrated mint oil should not be applied directly on infants' faces.",
        kannada: "ಗಾಢವಾದ ಪುದೀನಾ ತೈಲವನ್ನು ಚಿಕ್ಕ ಮಕ್ಕಳ ಮುಖಕ್ಕೆ ನೇರವಾಗಿ ಹಚ್ಚಬಾರದು.",
      },
      {
        english: "Excessive amounts may mildly irritate those with gallbladder stones.",
        kannada: "ಪಿತ್ತಕೋಶದ ಕಲ್ಲುಗಳಿರುವವರು ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದಲ್ಲಿ ಸೇವಿಸುವ ಮುನ್ನ ಎಚ್ಚರ ವಹಿಸಬೇಕು.",
      },
      {
        english: "Wilted or unwashed leaves can carry soil microbes; rinse thoroughly.",
        kannada: "ಮಣ್ಣಿನ ಅಂಶ ಇರುವುದರಿಂದ ಬಳಸುವ ಮೊದಲು ಎಲೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ತೊಳೆಯಬೇಕು.",
      },
    ],
    howToUseTitleEnglish: "How to Make Pudina Digestive Juice & Warm Tea",
    howToUseTitleKannada: "ಪುದೀನಾ ಜ್ಯೂಸ್ ಮತ್ತು ಜೀರ್ಣಕಾರಿ ಕಷಾಯ ವಿಧಾನ",
    howToUseSteps: [
      {
        english: "Pluck 15–20 fresh green Mint leaves and rinse cleanly in cold water.",
        kannada: "15–20 ತಾಜಾ ಹಸಿರು ಪುದೀನಾ ಎಲೆಗಳನ್ನು ಬಿಡಿಸಿ ತಣ್ಣೀರಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ತೊಳೆಯಿರಿ.",
      },
      {
        english: "For warm digestion tea: steep the crushed leaves in 1.5 cups of hot boiled water for 5 minutes.",
        kannada: "ಬಿಸಿ ಕಷಾಯಕ್ಕಾಗಿ: ಜಜ್ಜಿದ ಎಲೆಗಳನ್ನು 1.5 ಕಪ್ ಕುದಿಸಿದ ನೀರಿನಲ್ಲಿ 5 ನಿಮಿಷ ನೆನೆಸಿಡಿ.",
      },
      {
        english: "For cooling Pudina juice: blend the leaves with 1 glass water, half lemon juice, and roasted cumin.",
        kannada: "ತಂಪು ಜ್ಯೂಸ್‌ಗಾಗಿ: ಎಲೆಗಳನ್ನು 1 ಲೋಟ ನೀರು, ಅರ್ಧ ನಿಂಬೆ ರಸ ಮತ್ತು ಹುರಿದ ಜೀರಿಗೆಯೊಂದಿಗೆ ರುಬ್ಬಿ.",
      },
      {
        english: "Strain cleanly and add a pinch of rock salt or jaggery if preferred.",
        kannada: "ಸೋಸಿಕೊಂಡು ರುಚಿಗೆ ತಕ್ಕಂತೆ ಚಿಟಿಕೆ ಕಲ್ಲುಪ್ಪು ಅಥವಾ ಬೆಲ್ಲ ಸೇರಿಸಿ.",
      },
      {
        english: "Drink fresh after meals for soothing digestive comfort.",
        kannada: "ಊಟದ ನಂತರ ಜೀರ್ಣಕ್ರಿಯೆಯ ಹಿತಕ್ಕಾಗಿ ತಾಜಾವಾಗಿ ಕುಡಿಯಿರಿ.",
      },
    ],
    isDemo: true,
  },
];
