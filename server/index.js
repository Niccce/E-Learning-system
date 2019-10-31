// node 后端服务器
//Express服务器入口文件
//用来定义与监听后端服务器。

//index.js
// const fs = require('fs')
// const path = require('path')
const classApi = require('./api/classApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

//设置跨域访问
// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
//   )
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.header('X-Powered-By', ' 3.2.1')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   if (req.method == 'OPTIONS') res.send(200)
//   //让options请求快速返回
//   else next()
//   // next();
// })

// 解决跨域问题

// 后端api路由
app.use('/api/class', classApi)
// app.use('/api/book', bookApi)

// 监听端口
app.listen(3000, () => {
  console.log('success listen at port:3000......')
})
