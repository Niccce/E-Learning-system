//测试用api示例

var db = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')
let jwt = require('jsonwebtoken')

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
      console.log(resultArray)
      if (resultArray.mem_pass == params.password) {
        res.json({
          // 进行加密的方法
          // sing 参数一：加密的对象 参数二：加密的规则 参数三：对象
          token: jwt.sign({ email: params.email }, 'abcd', {
            // 过期时间
            // expiresIn: '60s'
            // expiresIn: 60 * 60 * 1 //1h
            expiresIn: 60 * 10 //10min
          }),
          code: 200,
          data: 1,
          userId: resultArray.mem_id,
          username: resultArray.mem_name,
          points: resultArray.mem_value
        })
        // res.send('1')
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
  var grade = 1 //默认LV1
  var value = 0
  //   var userId = id
  conn.query(
    sql,
    [
      params.id,
      params.username,
      params.password,
      params.email,
      sex,
      grade,
      value
    ],
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

//生成不重复ID
function GenNonDuplicateID(randomLength) {
  let idStr = Date.now().toString(36)
  idStr += Math.random()
    .toString(36)
    .substr(3, randomLength)
  return idStr
}
// 判断token有无过期
router.post('/validate', function(req, res) {
  let token = req.headers.authorization
  // 验证token合法性 对token进行解码
  console.log('token:' + token)
  jwt.verify(token, 'abcd', function(err, decode) {
    // if (err) {
    //   res.json({
    //     msg: '当前用户未登录',
    //     isLogin:false
    //   })
    //   // console.log('ture')
    //   // res.send('1')
    // } else {
    //   // 证明用户已经登录
    //   // res.json({
    //   //   token: jwt.sign({ email: params.email }, 'abcd', {
    //   //     // 过期时间
    //   //     expiresIn: '60s'
    //   //   }),
    //   //   // username: decode.username,
    //   //   msg: '已登录',
    //   //   isLogin:true
    //   // })
    //   // res.send('0')
    //   console.log(false)
    // }

    if (err) {
      console.log('err:'+err)
      switch (err.name) {
        case 'JsonWebTokenError':
          // res.status(403).send({ code: -1, msg: '无效的token' })
          res.send({ code: -1, msg: '无效的token' })
          console.log('JsonWebTokenError')
          break
        case 'TokenExpiredError':
          // res.status(403).send({ code: -1, msg: 'token过期' })
          res.send({ code: -1, msg: 'token过期' })
          break
      }
    } else {
      res.send({ code: 1, msg: '已登录' })
    }
  })
})

module.exports = router
