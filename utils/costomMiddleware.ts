import { Request, NextFunction } from 'express';

import { ResponseWithResultSend } from '../interfaces/common';

// 统一接口返回格式
export function resultMiddleware() {
  return (_: Request, res: ResponseWithResultSend, next: NextFunction) => {
    res.resultSend = (args) => {
      res.send({ code: 200, msg: '请求成功', data: null, ...args });
    };
    next();
  };
}
