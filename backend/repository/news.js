const { News } = require("../domain/models/models");
const AsyncHandler = require("express-async-handler");

const create_news = AsyncHandler(async (news) => {
  news = await News.create(news);
  return news;
});

const get_news_by_id = AsyncHandler(async (id) => {
  const news = await News.findById(id);
  return news;
});
