const redis = require('../libs/redis')

module.exports = () => async (ctx, next) => {
  ctx.redis = redis
  console.log('Redis created')
  await next()
}
