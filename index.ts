import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';

import CookieRouter from './router/cookie';
import MysqlRouter from './router/mysql';
import LoginRouter from './router/login';

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static('./public'));
app.use(cookieParser('secret'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/login', LoginRouter);
app.use('/cookie', CookieRouter);
app.use('/mysql', MysqlRouter);

app.listen(3456, () => {
  console.log('服务运行成功');
});