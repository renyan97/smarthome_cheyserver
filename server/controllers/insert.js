   const { mysql } = require('../qcloud') 
  module.exports = async (ctx, next) => {
    await mysql('match').insert({'w_order':"1aa"},{'a_order':"1011"}).then(res => {
          
    ctx.state.code = 0
    ctx.state.data =  res
  }).catch(err => {
    ctx.state.code = -1
    throw new Error(err)
  })
  }