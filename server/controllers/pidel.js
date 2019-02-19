const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
  var data = ctx.request.body.order
  await mysql('pi').del().then(res => {

    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}