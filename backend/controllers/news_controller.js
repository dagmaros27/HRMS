const NewsUsecase = require("../usecases/news_usecase");

const newsUsecase = new NewsUsecase();

const createNews = async (req, res) => {
  const newsData = req.body;
  const news = await newsUsecase.createNews(newsData);
  res.status(201).json(news);
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
