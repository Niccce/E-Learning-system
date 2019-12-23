var db = require("../db");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var conn = mysql.createConnection(db.mysql);
conn.connect();

// 会员添加课程
router.get("/addinClass", (req, res) => {
  var sql = $sql.menprogress.addin;
  var params = req.query;
  var progress = "0";
  conn.query(
    sql,
    [
      params.mem_id,
      params.cla_id,
      progress
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        res.send("1");
      }
    }
  );
  conn.end();
});

//会员删除课程
router.post("/deleteclass", (req, res) => {
  var sql = $sql.menprogress.delete;
  var params = req.body;
  console.log("sql" + sql);
  console.log(params);
  conn.query(sql, [params.mem_id, params.cla_id], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send("1");
    }
  });
});

module.exports = router;