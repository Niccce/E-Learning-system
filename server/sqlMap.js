// SQL语句映射文件，以供api逻辑调用
var sqlMap = {
  // 课程
  class: {
    //获取推荐课程
    get: "select * from class",
    //查询课程
    search: "select * from class where (cla_name = ?)",
    searchById: "select * from class where (cla_id=?)",
    //职员添加课程
    add:
      "insert into class (cla_id,cla_name,cla_content,cla_teacher,cla_iftest,cla_date,cla_type,cla_value,cla_video,cla_ppt,cla_grade,cla_sum) values (?,?,?,?,?,?,?,?,?,?,?,?)",
    // 职员删除课程信息
    deletein: "delete from class where (cla_id=?)",
    // 会员等级课程
    vip: "select * from class where (cla_grade < ?)"
  },
  // 用户
  member: {
    // 注册
    add:
      "insert into member (mem_id,mem_name, mem_pass, mem_email, mem_sex,mem_grade,mem_value) values (?,?,?,?,?,?,?)",
    // 登录验证邮箱
    // user_email: 'select * from member where mem_email = ?'
    user_email: "select * from member "
  },
  menprogress: {
    // 会员添加学习课程
    addin: "insert into menprogress(mem_id,cla_id,progress) values (?,?,?)",
    // 会员删除学习课程信息
    // delete: "delete from menprogress where (mem_id=?) and (cla_id=?)",
    // 获取会员学习进度
    getProgress:
      "select progress from menprogress where (mem_id=?) and (cla_id=?)",
    // 修改会员学习进度
    modify: "update menprogress set progress=? where (mem_id=?) and (cla_id=?)"
  },
  news: {
    //获取新闻列表
    get: "select * from news"
  },
  test: {
    //获取考试信息
    // get:
    //   "select class.cla_id,class.cla_content,class.cla_teacher,test.tes_date,test.test_number,class.cla_sum,class.cla_iftest from test left join class on (test.cla_id = class.cla_id) union select class.cla_id,class.cla_content,class.cla_teacher,test.tes_date,test.test_number,class.cla_sum,class.cla_iftest from test right join class on (test.cla_id = class.cla_id)"
  }
};

module.exports = sqlMap;
