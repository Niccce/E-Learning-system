//测试用api示例

var db = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(db.mysql)
conn.connect()

// 登录，查找用户信息
router.post('/login', (req, res) => {
  var sql_name = $sql.member.user_email
  var params = req.body
  if (params.email) {
    sql_name += "where mem_email ='" + params.email + "'"
  }
  conn.query(sql_name, params.email, function(err, result) {
    if (err) {
      console.log(err)
    }
    if (result[0] === undefined) {
      res.send('-1') //查询不出mem_email，data 返回-1
    } else {
      var resultArray = result[0]
      if (resultArray.mem_pass == params.password) {
        res.send('1')
      } else {
        res.send('0') //密码错误
      }
    }
  })
})

// 注册，添加用户
router.post('/register', function(req, res) {
  var params = req.body
  //第一步 首先查看存在该用户
  var sql = `select * from member where mem_email="${params.email}"`
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err)
    } else {
      if (result.length > 0) {
        res.send('-1')
        //   console.log('用户已存在')
      } else {
        var userId = GenNonDuplicateID(3)
        console.log('userid=' + userId)
          params.id = userId
          console.log(params)
        registerInfo(params, res)
      }
    }
  })
})

// router.post('/addUser', (req, res) => {
//   var sql = $sql.member.add
//   var params = req.body
//   console.log(params)
//   conn.query(
//     sql,
//     [
//       params.id,
//       params.username,
//       params.password,
//       params.email,
//       params.sex,
//       params.grade,
//       params.value
//     ],
//     function(err, result) {
//       if (err) {
//         console.log(err)
//       }
//       if (result) {
//         res.send('1')
//         // jsonWrite(res, result)
//       }
//     }
//   )
// })

function registerInfo(params, res) {
  var sql = $sql.member.add
  var sex = '男'
  var grade = 0
  var value = 0
//   var userId = id
  conn.query(
    sql,
    [params.id, params.username, params.password, params.email, sex, grade, value],
    function(err, result) {
      if (err) {
        console.log(err)
      }
      if (result) {
        res.send('1')
      }
    }
  )
}

function GenNonDuplicateID(randomLength) {
  let idStr = Date.now().toString(36)
  idStr += Math.random()
    .toString(36)
    .substr(3, randomLength)
  return idStr
}

module.exports = router
