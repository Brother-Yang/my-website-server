import express from 'express';

import db from '../config/db.config';
import jwt from '../config/jwt.config';

const router = express.Router();

router.post('/', async (req, res) => {
  const sql = 'select * from users where username = ? and password = ?';

  const { password, username } = req.body;

  // 假设用户唯一
  const result = await db.query(sql, [username, password]);
  const user = result[0][0];

  if (!user) {
    return res.send({
      ok: 0,
      msg: '用户名或密码错误',
    });
  } else {
    const token = jwt.generate(
      {
        id: user?.id,
        username: user?.username,
      },
      '10s',
    );

    return res.send({
      ok: 1,
      msg: '登录成功',
      token,
    });
  }
});

export default router;
