const { NewsUsecase } = require("../usecases/usecases");

const newsUsecase = new NewsUsecase();

const createNews = async (req, res) => {
  try {
    const { title, content, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imagePath = `/api/uploads/${req.file.filename}`; // Relative path

    const newsData = {
      title,
      description,
      content,
      image: imagePath, // Save the relative path in the database
    };

    const news = await newsUsecase.createNews(newsData);

    res.status(201).json(news);
  } catch (error) {
    console.error("Error creating news:", error.message);
    res
      .status(500)
      .json({ message: "Failed to create news", error: error.message });
  }
};

const getAllNews = async (req, res) => {
  const news = await newsUsecase.getAllNews();
  res.status(200).json(news);
};

const getNewsById = async (req, res) => {
  const newsId = req.params.id;
  const news = await newsUsecase.getNewsById(newsId);
  res.status(200).json(news);
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
};
