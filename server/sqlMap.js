// SQL语句映射文件，以供api逻辑调用
var sqlMap = {
  // 课程
  class: {
    search: 'select * from class'
  },
  // 用户
  member: {
    add: 'insert into member (mem_id,mem_name, mem_pass, mem_email, mem_sex,mem_grade,mem_value) values (?,?,?,?,?,?,?)',
    // user_email: 'select * from member where mem_email = ?'
    user_email: 'select * from member '
  }
}

module.exports = sqlMap
