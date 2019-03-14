const create = async ctx => {
  const store = await ctx.redis.hset('articles', ctx.request.body.id, JSON.stringify(ctx.request.body))
  ctx.body = ctx.request.body
  ctx.status = 201
}

const index = async ctx => {
  const store = await ctx.redis.hgetall('articles')
  ctx.body = store
}

const show = async ctx => {
  const {
    id
  } = ctx.params

  const store = await ctx.redis.hget('articles', id)
  ctx.body = JSON.parse(store)
}

const update = async ctx => {
  const {
    id
  } = ctx.params

  const store = await ctx.redis.hset('articles', id, JSON.stringify(ctx.request.body))
  ctx.body = ctx.request.body
}

const remove = async ctx => {
  const {
    id
  } = ctx.params

  const store = await ctx.redis.hdel('articles', id)
  ctx.body = store
}

module.exports = {
  create,
  index,
  show,
  update,
  remove
}