import { type Request, type NextFunction } from 'express';

import { ResponseWithResultSend } from '../interfaces/common';
import JWT from '../config/jwt.config';

// 统一接口返回格式
export function resultMiddleware() {
  return (_: Request, res: ResponseWithResultSend, next: NextFunction) => {
    res.resultSend = (args) => {
      res.send({ code: 200, msg: '请求成功', data: null, ...args });
    };
    next();
  };
}

export function tokenMiddleware() {
  return (req: Request, res: ResponseWithResultSend, next: NextFunction) => {
    if (req.url === '/login') {
      next();
      return;
    }

    const token = req.headers['authorization']?.split(' ')[1];
    if (token) {
      const payload = JWT.verify(token);

      if (payload) {
        const newToken = JWT.generate(
          {
            id: payload.id,
            username: payload.username,
          },
          '10s',
        );
        res.header('Authorization', newToken);
        next();
      } else {
        res.status(401).resultSend({ code: -1, msg: 'token过期' });
      }
    }
  };
}
