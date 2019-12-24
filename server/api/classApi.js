var db = require("../db");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var conn = mysql.createConnection(db.mysql);
conn.connect();

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

// 前端获取推荐课程
router.get("/getClass", (req, res) => {
  // console.log('hio')
  var sql = $sql.class.get;
  var params = req.body;
  conn.query(sql, function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    if (results) {
      // console.log(results)
      res.send(results); //这里必须用res.send,因为有数据返回到客户端
      //   res.end()
    }
  });
});

//搜索（查询）课程
router.post("/searchClass", (req, res) => {
  var sql = $sql.class.search;
  var params = req.body;
  console.log(params.cla_name);
  conn.query(sql, [params.cla_name], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
      console.log("result", result);
    }
  });
});

//根据id获取课程
router.post("/searchClassById", (req, res) => {
  var sql = $sql.class.searchById;
  var params = req.body;
  // console.log(params.cla_id);
  conn.query(sql, [params.cla_id], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
      // console.log("result", result);
    }
  });
});

// 职员添加课程
router.post("/addclass", (req, res) => {
  var sql = $sql.class.add;
  var params = req.body;
  var cla_sum = 0;
  // console.log("sql" + sql);
  // console.log(params);
  conn.query(
    sql,
    [
      params.cla_id,
      params.cla_name,
      params.cla_content,
      params.cla_teacher,
      params.cla_iftest,
      params.cla_date,
      params.cla_type,
      params.cla_value,
      params.cla_video,
      params.cla_ppt,
      params.cla_grade,
      cla_sum
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
  // conn.end();
});

//职员删除课程信息
router.post("/deleteinclass", (req, res) => {
  var sql = $sql.class.deletein;
  var params = req.body;
  console.log("sql" + sql);
  console.log(params);
  conn.query(sql, [params.cla_id], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send("1");
    }
  });
});

//获取会员等级课程列表
router.post("/vipClass", (req, res) => {
  var sql = $sql.class.vip;
  var params = req.body;
  console.log(sql);
  conn.query(sql, [params.cla_grade], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
      console.log("result", result);
    }
  });
});

module.exports = router;
