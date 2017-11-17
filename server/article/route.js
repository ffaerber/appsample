const Router = require("koa-router");

const router = new Router();
const controller = require("./controller");
const apiPath = `/api/v1/articles`;

router.get(`${apiPath}/:id`,  controller.show);
router.post(`${apiPath}`,     controller.create);

module.exports = router;
