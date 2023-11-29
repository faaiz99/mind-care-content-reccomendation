import express from 'express';
import { getReccomendations } from "../controllers/recommend.js"
const router = express.Router();

/* GET home page. */
router.post('/', getReccomendations);
router.get('/', (req, res, next) => {
  res.json({ title: "Mind Care Content Reccomendation API"});
});

export { router as reccomendationRouter };