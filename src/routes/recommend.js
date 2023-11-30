const express = require("express");
const { getReccomendations } = require("../controllers/recommend.js");
const router = express.Router();
const { cachedPosts } = require("../middlewares/cache.middleware.js");
/* GET home page. */
router.post("/reccomend",cachedPosts, getReccomendations);
router.get("/", (req, res) => {
  res.json({ title: "Mind Care Content Reccomendation API" });
});

module.exports = { reccomendationRouter: router };
