const { mysql } = require('../qcloud')

module.exports = async (ctx, next) => {
  var data = ctx.request.body

  await mysql('pi').insert({
    'wendu': data.wendu,
    'shidu': data.shidu, 
    'yiyang': data.yiyang,
    'tianranqi': data.tianranqi,
    'guangzhao': data.guangzhao,
    'remin': data.remin,
    'huoyan': data.huoyan,
    'time': data.time,
     'date':data.date
  }).then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}