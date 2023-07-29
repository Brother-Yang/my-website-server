import { type Response } from 'express';

export interface ResultSendArg {
  data?: unknown;
  code?: number;
  msg?: string;
}

export interface ResponseWithResultSend extends Response {
  resultSend: (arg: ResultSendArg) => void;
}
