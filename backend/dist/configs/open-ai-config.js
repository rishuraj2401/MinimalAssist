
import { GoogleGenerativeAI } from "@google/generative-ai";
export const configureGemini = () => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log(genAI);
    return genAI;
};
//# sourceMappingURL=open-ai-config.js.map