/*
 * @Author: your name
 * @Date: 2020-03-16 19:47:42
 * @LastEditTime: 2020-03-16 21:03:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /miniNodeSer/miniService/routes/users.js
 */
const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/userInfo', async (ctx, next) => {
  ctx.body = {
    msg: '',
    data: {
      name: 'liuyanbao',
      age: 18,
      speciality: 'long'
    }
  }
})

module.exports = router
