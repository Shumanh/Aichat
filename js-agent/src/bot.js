import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

export class AgenticChatBot {
  constructor({ modelName = "gemini-2.0-flash-exp" } = {}) {
    this.modelName = modelName;
    this.model = null;
    this.#setupApi();
  }

  #setupApi() {
    dotenv.config();

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      throw new Error(
        [
          "GOOGLE_API_KEY not found.",
          "Create a .env file with GOOGLE_API_KEY or set it as an environment variable.",
          "Get an API key from: https://makersuite.google.com/app/apikey",
        ].join(" \n")
      );
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      this.model = genAI.getGenerativeModel({ model: this.modelName });
    } catch (error) {
      throw new Error(`Failed to initialize Gemini API: ${error.message}`);
    }
  }

  async generateResponse(prompt) {
    if (!this.model) {
      throw new Error("Model not initialized");
    }

    const response = await this.model.generateContent(prompt);
    const text = response?.response?.text();
    return text?.trim();
  }
}

