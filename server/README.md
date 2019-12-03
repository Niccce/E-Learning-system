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
- [ ] 首页
    - [ ] 搜索
    - [ ] 新闻轮播图的链接
    - [ ] 新闻消息条内容
    - [ ] 会员分类栏
        - [ ] 对应会员的课程显示（课程页）
    - [ ] 推荐课程
- [ ] 消息
    - [ ] 课程消息
    - [ ] 课程回复内页
- [ ] 我的学习
- [ ] 账号






# 遇到的问题
1. [Vuejs 本地proxytable无效排查方案](https://blog.csdn.net/qq_35643562/article/details/84788861)

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

