import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY });

const generateSummary = async (promptText) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promptText,
  });
  return response.text;
};

export default generateSummary;
