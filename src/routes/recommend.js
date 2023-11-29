const express = require("express");
const { getReccomendations } = require("../controllers/recommend.js");
const router = express.Router();

/* GET home page. */
router.post("/reccomend", getReccomendations);
router.get("/", (req, res, next) => {
  res.json({ title: "Mind Care Content Reccomendation API" });
});

module.exports = { reccomendationRouter: router };
