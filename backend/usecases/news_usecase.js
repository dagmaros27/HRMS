const {
  create_news,
  get_all_news,
  get_news_by_id,
} = require("../repositories/news");

class NewsUsecase {
  async createNews(newsData) {
    return await create_news(newsData);
  }

  async getAllNews() {
    return await get_all_news();
  }

  async getNewsById(newsId) {
    return await get_news_by_id(newsId);
  }
}

module.exports = NewsUsecase;
