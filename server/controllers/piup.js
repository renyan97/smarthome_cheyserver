const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
  var data=ctx.request.body.piout
  await mysql('piout').where('order','>',-1).update({'order':data}).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}