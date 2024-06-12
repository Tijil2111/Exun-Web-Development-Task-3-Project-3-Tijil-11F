//learnt mongodb and expres from free code camp video on youtube. https://www.youtube.com/watch?v=_7UQPve99r4&t=4446s&ab_channel=freeCodeCamp.org
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Article = require("./Models/article.model.js");
const articleRoute = require("./Routes/articleRoute.js");
const dotenv = require("dotenv");
dotenv.config();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/articles", articleRoute);

app.get("/", (req, res) => {
  res.send("go to /api/articles for accessing the articles ");
  res.send("go to /api/articles by using a post method to add a new articles");
  res.send("go to /api/articles/id to find the article of specific id");
});

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server working on 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
