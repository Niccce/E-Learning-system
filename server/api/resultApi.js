var db = require("../db");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var conn = mysql.createConnection(db.mysql);
conn.connect();

//插入考试成绩、证书
router.get("/addGoal", (req, res) => {
  var sql = $sql.result.add;
  var params = req.query;
  var progress = "0";
  conn.query(sql, [params.mem_id, params.cla_id, progress], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  });
  // conn.end();
});


module.exports = router;
