import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Note: In a real production app, you might proxy this through a backend to protect the key,
// or strictly control the allowed domains in the Google Cloud Console.
// For this frontend demo, we assume the environment variable is injected.

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel officiel de l'Université Horizon. Ton rôle est d'aider les futurs étudiants, les étudiants actuels et les visiteurs.
Adopte un ton professionnel, accueillant, chaleureux et académique.

Informations sur l'Université Horizon :
- Localisation : Paris, France.
- Points forts : Excellence académique, recherche de pointe, campus vert, vie étudiante dynamique.
- Facultés principales : Sciences & Technologies, Arts & Humanités, Économie & Gestion.
- Admissions : Ouvertes pour septembre prochain.

Si on te demande un programme spécifique que tu ne connais pas, suggère de visiter la page "Formations" ou de contacter le service admission.
Réponds de manière concise (max 3-4 phrases) sauf si la question demande des détails.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "Je suis désolé, je ne suis pas connecté pour le moment (Clé API manquante).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Une erreur est survenue lors de la communication avec le serveur.";
  }
};