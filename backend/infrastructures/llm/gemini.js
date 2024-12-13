const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

class Gemini {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }

  async generateContent(prompt) {
    const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  }
}

module.exports = Gemini;
