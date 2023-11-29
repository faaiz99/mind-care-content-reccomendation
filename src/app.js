import dotenv from "dotenv";
import express, { json, urlencoded } from 'express';
import { reccomendationRouter } from './routes/recommend.js';
import { handleError } from './middlewares/error.middleware.js';
import { notFound } from './middlewares/not-found.middleware.js';

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api', reccomendationRouter);
app.use(handleError)
app.use(notFound)


export default app;
