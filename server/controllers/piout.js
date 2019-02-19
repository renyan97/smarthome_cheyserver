const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
  await mysql('piout').select('*').then(res => {
    ctx.state.code = 0
    ctx.state.data = res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
}