import db from '../config/db.config';

type Arg = { username: string; password: string };

const loginService = {
  // 假设用户存在且唯一
  getUser: async (arg: Arg) => {
    const sql = 'select * from users where username = ? and password = ?';
    const res = await db.query(sql, [arg.username, arg.password]);
    return res[0][0];
  },
};

export default loginService;
