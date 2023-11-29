const dotenv = require("dotenv");
const express = require('express');
const { json, urlencoded } = express;
const { reccomendationRouter } = require('./routes/recommend.js');
const { handleError } = require('./middlewares/error.middleware.js');
const { notFound } = require('./middlewares/not-found.middleware.js');

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api', reccomendationRouter);
app.use(handleError)
app.use(notFound)

module.exports = app;