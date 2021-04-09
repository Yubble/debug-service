/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-01-21 20:58:19
**/
const router = require('koa-router')()

router.prefix('/api')

const delay = async time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

router.post('/pay', async (ctx, next) => {
  await delay(30000)
  ctx.body = {
    code: 0,
    data: {
      payInfo: ''
    }
  }
})

router.post('/bi-service', async (ctx, next) => {
  console.log('访问了埋点接口')
  await delay(30000)
  ctx.body = 'end'
})

router.get('/bi-service', async (ctx, next) => {
  // await delay(2000)
  ctx.body = 'end'
})

router.get('/pay/wait', async (ctx, next) => {

  await delay(1000)
  ctx.body = 'get await'
})

module.exports = router