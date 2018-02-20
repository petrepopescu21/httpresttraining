require('dotenv').config()
var Koa = require("koa");
var Router = require("koa-router");
var feministapi = require("./routes/api");
var app = new Koa();
var router = new Router();

router.get("/", ctx => {
  ctx.body = "Hello";
});

app.use(router.routes());
app.use(feministapi.routes());
app.listen(process.env.PORT || 8080);
