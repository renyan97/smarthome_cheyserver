const { mysql } = require('../qcloud')

module.exports = async (ctx, next) => {
  var data = ctx.request.body

  await mysql('match').insert({
     'w_order':data.w_order,
     'a_order':data.a_order

  }).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}