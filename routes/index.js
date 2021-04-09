/**
 * @Name: 
 * @Description: 更新路由部分
 * @Author: 刘燕保
 * @Date: 2021-01-21 20:38:05
**/
const router = require('koa-router')()

router.get('/', async (ctx, next) => {

  let m1 = 1

  for (let i = 0; i < 99; i++) {
    m1 += 1
  }

  let m2 = m1 + m1

  console.log('m2 is ', m2)

  await ctx.render('index', {
    title: `Hello Koa 2! ${m1}`
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
