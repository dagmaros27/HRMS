const {
  create_news,
  get_all_news,
  get_news_by_id,
} = require("../repositories/news");

class NewsUsecase {
  async createNews(newsData) {
    const created = await create_news(newsData);
    if (!created) {
      throw new Error("Failed to create news");
    }
    return created;
  }

  async getAllNews() {
    const news = await get_all_news();
    if (!news) {
      throw new Error("Failed to get all news");
    }
    return news;
  }

  async getNewsById(newsId) {
    const news = await get_news_by_id(newsId);
    if (!news) {
      throw new Error("News not found");
    }
    return news;
  }
}

module.exports = NewsUsecase;
