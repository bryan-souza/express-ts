import express from 'express';
import indexRouter from './routers/index.router';

const app = express();

app.use(express.json()); // JSON parser
app.use(express.urlencoded({ extended: true })); // Form-Data parser
app.use('/', indexRouter);

app.listen(3333, () => 'Server running on port 3333');