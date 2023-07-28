import jwt from '../config/jwt.config';
import loginServices from '../services/login';

import { Response, Request } from 'express';

const loginController = {
  getUser: async (req: Request, res: Response) => {
    const { password, username } = req.body;

    const user = await loginServices.getUser({ username, password });

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
  },
};

export default loginController;
