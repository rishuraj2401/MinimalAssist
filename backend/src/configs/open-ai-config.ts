// import { Configuration } from "openai"

// export const configureOpenAI = () => {
//     const config = new Configuration({
//         apiKey:  process.env.OPEN_AI_SECRET_KEY,
//         organization: process.env.OPEN_AI_ORG
//     })
//     return config
// }


import { GoogleGenerativeAI } from "@google/generative-ai";

export const configureGemini = () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
console.log(genAI);
  return genAI;
};