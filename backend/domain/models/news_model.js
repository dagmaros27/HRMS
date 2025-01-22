const mongoose = require("mongoose");
const { Schema } = mongoose;

// News Model (for announcements)
const newsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Employee" },
    publishedDate: { type: Date, default: Date.now },
    image: { type: String },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

module.exports = { News };
