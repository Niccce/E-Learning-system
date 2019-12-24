var db = require("../db");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var conn = mysql.createConnection(db.mysql);
conn.connect();

//获取课程评论
router.get("/getComment", (req, res) => {
  var sql = $sql.cMessage.getComment;
  var params = req.query;
  conn.query(sql, [params.cla_id], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  });
});

// 会员添加评论
router.get("/addComment", (req, res) => {
  var sql = $sql.cMessage.add;
    var params = req.query;
    var mesId = GenNonDuplicateID(1);
  console.log(params);
  conn.query(
    sql,
    [
      params.cla_id,
      params.cMes_date,
      params.cMes_userId,
      params.cMes_content,
      mesId,
      params.cMes_userType
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
});

//生成不重复ID
function GenNonDuplicateID(randomLength) {
  let idStr = Date.now().toString(36);
  idStr += Math.random()
    .toString(36)
    .substr(3, randomLength);
  return idStr;
}

module.exports = router;
