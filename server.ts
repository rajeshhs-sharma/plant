import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

const plantResponseSchema = {
  type: Type.OBJECT,
  properties: {
    isPlant: {
      type: Type.BOOLEAN,
      description:
        "True if the image clearly shows a real plant, leaf, herb, tree foliage, flower, or succulent. False if blurry, blank, non-plant object, person, or unrecognizable.",
    },
    confidence: {
      type: Type.INTEGER,
      description: "Confidence percentage from 0 to 100.",
    },
    englishName: {
      type: Type.STRING,
      description: "Common English name of the plant (e.g., Holy Basil (Tulsi)).",
    },
    kannadaName: {
      type: Type.STRING,
      description: "Authentic Kannada name in Kannada script (e.g., ತುಳಸಿ).",
    },
    scientificName: {
      type: Type.STRING,
      description: "Botanical Latin binomial name (e.g., Ocimum tenuiflorum).",
    },
    aboutEnglish: {
      type: Type.STRING,
      description:
        "Exactly 3 clear, simple sentences describing the plant, its appearance, and cultural/botanical significance.",
    },
    aboutKannada: {
      type: Type.STRING,
      description:
        "Exactly 3 clear, simple sentences in natural Kannada script describing the plant.",
    },
    medicinalUses: {
      type: Type.ARRAY,
      description: "Exactly 5 medicinal or traditional health uses with icon key.",
      items: {
        type: Type.OBJECT,
        properties: {
          icon: {
            type: Type.STRING,
            description:
              "One of: shield, heart, wind, sparkles, droplet, sun, flame, leaf, brain, activity",
          },
          english: {
            type: Type.STRING,
            description: "Concise medicinal use point in English.",
          },
          kannada: {
            type: Type.STRING,
            description: "Concise medicinal use point in Kannada script.",
          },
        },
        required: ["icon", "english", "kannada"],
      },
    },
    advantages: {
      type: Type.ARRAY,
      description: "Exactly 5 practical advantages or benefits of this plant.",
      items: {
        type: Type.OBJECT,
        properties: {
          english: { type: Type.STRING },
          kannada: { type: Type.STRING },
        },
        required: ["english", "kannada"],
      },
    },
    disadvantages: {
      type: Type.ARRAY,
      description: "Exactly 4 precautions, disadvantages, or potential side effects.",
      items: {
        type: Type.OBJECT,
        properties: {
          english: { type: Type.STRING },
          kannada: { type: Type.STRING },
        },
        required: ["english", "kannada"],
      },
    },
    howToUseTitleEnglish: {
      type: Type.STRING,
      description:
        "Short title for traditional preparation, e.g., How to Prepare Kashaya / Juice.",
    },
    howToUseTitleKannada: {
      type: Type.STRING,
      description: "Short Kannada title for preparation, e.g., ಕಷಾಯ / ರಸ ತಯಾರಿಸುವ ವಿಧಾನ.",
    },
    howToUseSteps: {
      type: Type.ARRAY,
      description: "4 to 5 clear step-by-step instructions to make Kashaya, decoction, or juice.",
      items: {
        type: Type.OBJECT,
        properties: {
          english: { type: Type.STRING },
          kannada: { type: Type.STRING },
        },
        required: ["english", "kannada"],
      },
    },
  },
  required: [
    "isPlant",
    "confidence",
    "englishName",
    "kannadaName",
    "scientificName",
    "aboutEnglish",
    "aboutKannada",
    "medicinalUses",
    "advantages",
    "disadvantages",
    "howToUseTitleEnglish",
    "howToUseTitleKannada",
    "howToUseSteps",
  ],
};

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "15mb" }));

  app.post("/api/identify-plant", async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      return res.status(503).json({
        error: "Gemini API key is not configured.",
        code: "NO_API_KEY",
      });
    }

    const { imageBase64, mimeType } = req.body as {
      imageBase64?: string;
      mimeType?: string;
    };

    if (!imageBase64 || typeof imageBase64 !== "string") {
      return res.status(400).json({
        error: "Image data is required.",
        code: "INVALID_INPUT",
      });
    }

    const cleanBase64 = imageBase64.includes(",")
      ? imageBase64.split(",")[1]
      : imageBase64;
    const resolvedMimeType = mimeType && mimeType.startsWith("image/")
      ? mimeType
      : "image/jpeg";

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: resolvedMimeType,
                data: cleanBase64,
              },
            },
            {
              text: "Identify the plant or leaf in this photograph. Provide accurate botanical details in both English and natural Kannada script (ಕನ್ನಡ), including 3-line summary, 5 medicinal uses, 5 advantages, 4 disadvantages/side effects, and step-by-step Kashaya or juice preparation instructions. If the image is NOT a plant or leaf, or is too blurry to identify, set isPlant to false.",
            },
          ],
        },
        config: {
          systemInstruction:
            "You are an expert Indian botanist and Ayurvedic herbal reference specialist fluent in English and Kannada. Be accurate, clear, and safety-conscious. Always write natural, grammatically correct Kannada script for all Kannada fields.",
          responseMimeType: "application/json",
          responseSchema: plantResponseSchema,
        },
      });

      const rawText = (response.text ?? "").trim();
      if (!rawText) {
        return res.status(502).json({
          error: "Empty response from plant identification model.",
          code: "EMPTY_RESPONSE",
        });
      }

      const parsed = JSON.parse(rawText);
      return res.json(parsed);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to identify plant.";
      console.error("Gemini identification error:", message);

      if (message.includes("403") || message.includes("PERMISSION_DENIED") || message.includes("API_KEY_INVALID")) {
        return res.status(403).json({
          error: "API key is invalid or lacks permission. Please verify GEMINI_API_KEY in Settings > Secrets.",
          code: "AUTH_ERROR",
        });
      }
      if (message.includes("429") || message.includes("RESOURCE_EXHAUSTED")) {
        return res.status(429).json({
          error: "API quota exceeded. Please try again shortly.",
          code: "QUOTA_EXCEEDED",
        });
      }

      return res.status(500).json({
        error: "Unable to complete AI identification right now.",
        code: "UPSTREAM_ERROR",
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PlantMitra server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
