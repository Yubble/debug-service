/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-03-08 15:07:51
**/
const router = require('koa-router')()

router.prefix('/test')

const delay = async time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

router.post('/delay', async (ctx, next) => {
  await delay(3000)
  ctx.body = {
    'msg': 'timeout了'
  }
})

module.exports = router
