const create = async ctx => {
  const store = await ctx.redis.set(ctx.request.body.id, JSON.stringify(ctx.request.body))
  ctx.body = ctx.request.body
  ctx.status = 201
}

const show = async ctx => {
  const {
    id
  } = ctx.params

  const store = await ctx.redis.get(id)
  ctx.body = JSON.parse(store)
}

const update = async ctx => {
  const {
    id
  } = ctx.params

  const store = await ctx.redis.set(id, JSON.stringify(ctx.request.body))
  ctx.body = ctx.request.body
}

const remove = async ctx => {
  const {
    id
  } = ctx.params

  const store = await ctx.redis.del(id)
  ctx.body = store
}

module.exports = {
  create,
  show,
  update,
  remove
}