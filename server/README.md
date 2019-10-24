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

mysql相关操作
```text
bin目录下
启动服务：net start mysql

登入：
mysql -u root -p
退出:exit
```

编写接口，跨域，从mysql获取数据，send回前端