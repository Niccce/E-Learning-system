var db = require("../db");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var conn = mysql.createConnection(db.mysql);
conn.connect();

//获取新闻列表接口
router.get("/getnews", (req, res) => {
  console.log("hio");
  var sql = $sql.news.get;
  var params = req.body;
  conn.query(sql, function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    if (results) {
      console.log(results);
      res.send(results); //这里必须用res.send,因为有数据返回到客户端
      console.log("results", results);
    }
  });
});

module.exports = router;
