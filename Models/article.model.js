const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema(
  {
    article: {
      type: String,
      required: [true, "Please enter article name"],
    },
    postedBy: {
      type: String,
      required: [true, "Please enter name"],
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
