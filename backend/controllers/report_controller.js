const Gemini = require("../infrastructures/llm/gemini");
const gemini = new Gemini();

const generateContent = async (req, res) => {
  const { prompt } = req.body;
  const content = await gemini.generateContent(prompt);
  res.status(200).json({ content });
};

module.exports = {
  generateContent,
};
