//var Feminist = require("../models/Feminist");

var koa = require("koa");
var Router = require("koa-router");

var fem = new Router({
  prefix: "/feminist"
});

fem.get("/", async ctx => {
    try {
        ctx.body = await Feminist.GetAll
    }
    catch(err) {
        ctx.status = 500
        ctx.body = {"error":"Something went wrong"}
        console.log(err)
    }
});

module.exports = fem;
