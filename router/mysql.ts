import express from 'express';

import db from '../config/db.config';

import { ResponseWithResultSend } from '../interfaces/common';

const router = express.Router();

router.get('/users', async (req, res: ResponseWithResultSend) => {
  const sql = 'select * from users';

  const result = await db.query(sql);

  res.resultSend({
    code: 1,
    data: result[0],
  });
});

router.get('/add', async (req, res) => {
  const sql = 'insert into users (username, password) values (?,?)';

  const result = await db.query(sql, ['admin', '123']);

  res.send({
    ok: 1,
  });
});

export default router;
