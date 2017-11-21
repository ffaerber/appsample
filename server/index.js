const Koa = require('koa');
const app = new Koa();
const article = require("./article/route");
const metrics = require("./metrics/route");

app
  .use(require('../middlewares/prometheus')())
  .use(require("koa-bodyparser")())
  .use(article.routes())
  .use(metrics.routes())

const server = app.listen(3000).on("error", err => {
  console.error(err);
});


module.exports = server;
