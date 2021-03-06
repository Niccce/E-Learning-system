var db = require("../db");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var conn = mysql.createConnection(db.mysql);
conn.connect();

//获取考试列表
// router.get('/gettest', (req, res) => {
//   var sql = $sql.test.get;
//   var params = req.body;
//   conn.query(sql,function(err, results, fields) {
//     if (err) {
//       console.log(err);
//     }
//     if (results) {
//       console.log(results);
//       res.send(results); //这里必须用res.send,因为有数据返回到客户端
//       console.log('results', results);
//     }
//   })
// });

//获取试题
router.post("/getQuestion", (req, res) => {
  var sql = $sql.test.join;
    var params = req.body;
    console.log(params);
  conn.query(sql, [params.cla_id], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  });
});

module.exports = router;
