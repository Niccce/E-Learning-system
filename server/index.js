// node 后端服务器
//Express服务器入口文件
//用来定义与监听后端服务器。

// const fs = require('fs')
// const path = require('path')
const classApi = require('./api/classApi')
const memberApi = require("./api/memberApi");
const menprogressApi = require("./api/menprogress");
const newsApi = require("./api/newsApi");
const testApi = require("./api/testApi");
const cMessageApi = require("./api/cMessageApi");
const resultApi = require("./api/resultApi");
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// 后端api路由
app.use('/api/class', classApi)
app.use("/api/member", memberApi);
app.use("/api/menprogress", menprogressApi);
app.use("/api/news", newsApi);
app.use("/api/test", testApi);
app.use("/api/cMessage", cMessageApi);
app.use("/api/result", resultApi);


// 监听端口
app.listen(3000, () => {
  console.log('success listen at port:3000......')
})
