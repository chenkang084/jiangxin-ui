const Koa = require("koa");
const app = new Koa();
// const debug = require("debug")("koa-weapp-demo");
// const response = require("./middlewares/response");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const serve = require("koa-static");
const path = require("path");
// console.log(path.join(__dirname, "build"));

const main = serve(path.join(__dirname, "build"));

// 使用响应处理中间件
// app.use(response);

// 解析请求体
app.use(bodyParser());
app.use(main);

// 引入路由分发
// const router = require("./routes");
// app.use(router.routes());

app.use((ctx, next) => {
  if (ctx.request.url === "/") {
    ctx.response.type = "html";
    ctx.response.body = fs.readFileSync("./index.html");
  } else {
    next();
  }
});

// 启动程序，监听端口
app.listen(9002, () => console.log(`listening on port 9002`));
