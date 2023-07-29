import jwt from '../config/jwt.config';
import loginServices from '../services/login';

import { ResponseWithResultSend } from '../interfaces/common';

import { Request } from 'express';

const loginController = {
  getUser: async (req: Request, res: ResponseWithResultSend) => {
    const { password, username } = req.body;

    const user = await loginServices.getUser({ username, password });

    if (!user) {
      return res.resultSend({ code: -1, msg: '请求失败', data: null });
    } else {
      const token = jwt.generate(
        {
          id: user?.id,
          username: user?.username,
        },
        '10s',
      );

      return res.resultSend({
        data: token,
      });
    }
  },
};

export default loginController;
