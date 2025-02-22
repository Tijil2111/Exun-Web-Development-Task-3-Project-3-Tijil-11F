const Article = require("../Models/article.model.js");

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findById(id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findByIdAndUpdate(id, req.body);
    if (!article) {
      res.status(404).json({ message: "Article not found" });
    }
    const updatedProduct = await Article.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findByIdAndDelete(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const postArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  postArticle,
};
