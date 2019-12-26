# 后端项目初始化
在项目根文件夹下创建一个server文件夹，与前端工程并列
`npm init`：生成package.json
`npm install express`：安装express
`npm install mysql`：安装mysq数据库l驱动
`npm install body-parser`
`npm install nodemon`：使用nodemon，修改后端代码不需重新npm run server
<!-- npm install eslint -->

添加.gitignore文件

新建文件
```text
db.js----用来添加mysql配置
index.js----Express服务器入口文件
sqlMap.js----SQL语句映射文件，以供api逻辑调用
api/userApi.js ---- 测试用api示例
```

**启动项目**：`npm run server`

# 编写接口
- [x] 登录注册
- [ ] 首页
    - [x] 搜索
    - [ ] 新闻轮播图的链接
    - [ ] 新闻消息条内容
    - [x] 会员分类栏
        - [x] 对应会员的课程显示（课程页）
    - [x] 推荐课程
- [ ] 消息
    - [ ] 课程消息
    - [ ] 课程回复内页
- [ ] 个人中心页
    - [ ] 已购课程
    - [ ] 完成课程
    - [ ] 我的成绩
    - [ ] 我的证书
- [x] 新闻详情页
- [ ] 课程详情页
    - [x] 课程介绍
    - [x] 评论
    - [x] 加入课程
- [ ] 课程学习页
    - [x] 留言
    - [x] 开始学习
    - [x] 进入考试

## 登录注册
1. 安装jsonwebtoken进行token验证
`npm install --save jsonwebtoken`

* [vue+express利用token 完成前后端登录](https://www.cnblogs.com/dangdanghepingping/p/11409040.html)
* [express + jwt 持久化登录（vue前端篇）](https://segmentfault.com/a/1190000019476705)
* [Vue路由之JWT身份认证的实现方法](https://www.jb51.net/article/168425.htm)
* [在vue中如何获取token，并将token写进header](https://blog.csdn.net/qq_34825875/article/details/79569579)
* [vue实现token用户登录](https://blog.csdn.net/baiqiangdoudou/article/details/100174505)
* [vue+express+jwt持久化登录的方法](https://www.jb51.net/article/163105.htm)
* [基于vue的token认证机制（完整版）](https://blog.csdn.net/qiemengyan/article/details/83992154)

# 遇到的问题
1. [Vuejs 本地proxytable无效排查方案](https://blog.csdn.net/qq_35643562/article/details/84788861)

# 参考
* [登录注册](https://segmentfault.com/a/1190000014268935?utm_source=tag-newest)
* [登录注册2](https://blog.csdn.net/wo05644660559/article/details/81707641)
* [随机id不重复](https://segmentfault.com/a/1190000020393710)

# 其他相关
mysql相关操作
```text
bin目录下
启动服务：net start mysql

登入：
mysql -u root -p

use RUNOOB;
select * from Class;
退出:exit
```

