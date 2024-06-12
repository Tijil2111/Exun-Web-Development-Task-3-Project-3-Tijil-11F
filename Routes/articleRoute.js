const express = require("express");
const router = express.Router();
const Article = require("../Models/article.model.js");
const {
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  postArticle,
} = require("../controllers/articleController.js");

router.get("/", getArticles);
router.get("/:id", getArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);
router.post("/create", postArticle);

module.exports = router;
