
import { GoogleGenAI, Type } from "@google/genai";
import { Release, MarketingContent } from "../types";

export const generateMarketingContent = async (release: Release): Promise<MarketingContent> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Você é um especialista em marketing musical de elite da Audios On (inspirado no nível de serviço da ONErpm). 
    Gere conteúdo promocional atraente para o seguinte lançamento:
    Título: ${release.title}
    Artista: ${release.artist}
    Gênero: ${release.genre}
    Links Atuais: ${JSON.stringify(release.links)}
    
    O conteúdo deve focar em conversão de fãs e proteção de direitos autorais.
    
    Diretrizes específicas:
    - Facebook: Post narrativo para fãs hardcore.
    - Instagram: Legenda com CTA agressivo para a bio. Inclua 10 hashtags estratégicas.
    - YouTube: Descrição SEO otimizada com créditos e capítulos.
    - TikTok: Roteiro curto de 15s para vídeo de bastidores/curiosidade.
    - SmartLink Slogan: Uma frase de 5 palavras para o cabeçalho do link de pré-save/lançamento.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          facebook: { type: Type.STRING },
          instagram: { type: Type.STRING },
          youtubeDescription: { type: Type.STRING },
          tiktokCaptions: { type: Type.STRING },
          smartLinkSlogan: { type: Type.STRING },
        },
        required: ["facebook", "instagram", "youtubeDescription", "tiktokCaptions", "smartLinkSlogan"]
      },
    },
  });

  try {
    return JSON.parse(response.text || "{}") as MarketingContent;
  } catch (error) {
    console.error("Error parsing Gemini response", error);
    throw new Error("Falha ao gerar conteúdo de marketing");
  }
};
