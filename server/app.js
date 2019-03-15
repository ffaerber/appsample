const Koa = require('koa')
const app = new Koa()

var views = require('koa-views');

const home = require('./home/route')
const article = require('./article/route')
const metrics = require('./metrics/route')

const bodyParser = require('koa-bodyparser');
const prometheus = require('../middlewares/prometheus')
const redis = require('../middlewares/redis')

app
  .use(views(__dirname + '/views'))
  .use(redis())
  .use(prometheus())
  .use(bodyParser())
  .use(home.routes())
  .use(article.routes())
  .use(metrics.routes())


module.exports = app