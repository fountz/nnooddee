const Router = require('koa-router')
const User = new Router()

User.post('/senduser', async function (context){
  let data = context.request.body
  if(data.age>=20) context.body="You are adult"
  else context.body = "You are teen"
})

module.exports = User
