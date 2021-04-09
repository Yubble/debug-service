/*
 * @Author: your name
 * @Date: 2020-03-16 20:27:33
 * @LastEditTime: 2020-03-16 20:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /miniNodeSer/miniService/routes/images.js
 */
const router = require('koa-router')()

router.prefix('/images')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/getlogo', function (ctx, next) {
  ctx.body = {
    msg: '',
    data: {
      img: 'this is logo'
    }
  }
})

module.exports = router