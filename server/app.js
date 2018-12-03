const Koa = require('koa')
const app = new Koa()

const article = require('./article/route')
const metrics = require('./metrics/route')

const bodyParser = require('koa-bodyparser');
const prometheus = require('../middlewares/prometheus')
const redis = require('../middlewares/redis')

app
  .use(redis())
  .use(prometheus())
  .use(bodyParser())
  .use(article.routes())
  .use(metrics.routes())

module.exports = app