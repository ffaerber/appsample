require('dotenv').config()

const Bluebird = require('bluebird')
const Redis = Bluebird.promisifyAll(require("redis"));

const redis = Redis.createClient(process.env.REDIS_HOST);

const create = async ctx => {
  const { body } = ctx.request;
  const res = await redis.setAsync(body.title, body.body)
  ctx.body = { res }
  ctx.status = 201
};

const show = async ctx => {
  const { id } = ctx.params;
  const res = await redis.getAsync(id)
  ctx.body = { res }
};

module.exports = { create, show };
