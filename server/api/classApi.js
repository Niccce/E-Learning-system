//测试用api示例

var db = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(db.mysql)
conn.connect()

// var jsonWrite = function(res, ret) {
//   if (typeof ret === 'undefined') {
//     res.json({
//       code: '1',
//       msg: '操作失败'
//     })
//   } else {
//     res.json(ret)
//   }
// }

// 增加课程接口
router.get('/getClass', (req, res) => {
  var sql = $sql.class.search
  var params = req.body
  conn.query(sql, function(err, results, fields) {
    if (err) {
      console.log(err)
    }
    if (results) {
      // console.log(results)
      res.send(results) //这里必须用res.send,因为有数据返回到客户端
      //   res.end()
    }
  })
})

module.exports = router
