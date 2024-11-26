const { News } = require("../domain/models/models");

const create_news = async (news) => {
  news = await News.create(news);
  return news;
};

const get_news_by_id = async (id) => {
  const news = await News.findById(id);
  return news;
};

const get_all_news = async () => {
  const news = await News.find();
  return news;
};

module.exports = {
  create_news,
  get_news_by_id,
  get_all_news,
};
