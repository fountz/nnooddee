const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const User = require('./app/api/senduser')
const App = new Koa()
const router = new Router()

App.use(bodyParser())
/*router.post('/senduser', async function (context){
  let data = context.request.body
  let date = new Date()
  if(data.age>=20) context.body="You are adult"
  else context.body = "You are teen"
  /*if(data.age>=20) console.log('Adult')
  else console.log("teen")
  context.body = data + res
})
*/
router.get('/:name/:sur', async function (context){
  console.log(context.params.name)
  console.log(context.params.sur)
  context.body = context.params.name + " " + context.params.sur
})
router.use('/user', User.routes())

App.use(router.routes())
App.use(router.allowedMethods())
/*App.use(async ctx => {
  ctx.body = "hello"
})*/
console.log('App listem port 3000')
App.listen(3000)
