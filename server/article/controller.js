require('dotenv').config()

const mongoose = require('../../libs/mongoose')

const Article = mongoose.model('Article', { _id: Number, title: String, msg: String })

const create = async ctx => {
  const doc = await Article.create(ctx.request.body)
  ctx.body = doc
  ctx.status = 201
}

const show = async ctx => {
  const { id } = ctx.params
  const doc = await Article.findOne({_id: id})
  ctx.body = doc
}

const update = async ctx => {
  const { id } = ctx.params
  const doc = await Article.findOneAndUpdate({_id: id}, ctx.request.body, {new: true})
  ctx.body = doc
}

const remove = async ctx => {
  const { id } = ctx.params
  const doc = await Article.remove({_id: id})
  ctx.body = doc
}

module.exports = { create, show, update, remove }
