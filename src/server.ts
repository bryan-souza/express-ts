import express from 'express';
import fibRouter from './routers/fib.router';
import indexRouter from './routers/index.router';

const app = express();

app.use(express.json()); // JSON parser
app.use(express.urlencoded({ extended: true })); // Form-Data parser
app.use('/', indexRouter); // Bind indexRouter to '/' path
app.use('/fib', fibRouter); // Bind fibRouter to '/fib' path

app.listen(3333, () => 'Server running on port 3333');