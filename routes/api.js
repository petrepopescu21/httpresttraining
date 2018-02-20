var koa = require("koa");
var Router = require("koa-router");
var router = new Router({
  prefix: "/api"
});
var db = require("../models/DbContext");


router.get("/", ctx => {
  ctx.status = 404;
  ctx.body = {
    success: false,
    error: { code: 404, message: "Nothing here, try one of the APIs instead" }
  };
});

router.use("/:table", async (ctx, next) => {
  try {
    ctx.state.db = new db(ctx.params.table);
    await ctx.state.db.Init();
    next();
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = "";
  }
});

router.get("/:table", async ctx => {
  try {
    var data = await ctx.state.db.GetAll();
    ctx.body = data;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = "";
  }
  ctx.body = data;
});

//router.use(fem.routes())

module.exports = router;
