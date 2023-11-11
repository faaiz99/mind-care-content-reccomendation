import express, { json, urlencoded } from 'express';
import indexRouter from './routes/index';

let app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

export default app;
