const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query);
  res.send('cookie');
});

router.get('/set', function (req, res) {
  //如果不进行任何设置,有效期默认为1个会话，浏览器关闭即失效
  res.cookie('userName', '张三', { maxAge: 1000 * 60 * 60, httpOnly: true, signed: true });
  res.send('设置cookie成功');
});

//获取cookie
router.get('/get', function (req, res) {
  // console.log(req.cookies.userName);
  console.log(req.signedCookies.userName);
  res.send('获取cookie成功，cookie为：' + req.signedCookies.userName);
});

module.exports = router;
