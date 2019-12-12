# learning_online

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目环境准备
* node.js、git
* 安装vue-cli(已安装可忽略))
`npm install --global vue-cli`

# 项目初始化
## 前端工程初始化
1. 创建一个基于webpack打包工具构建的Vue项目
2. `vue init webpack learning_online`，选择各项配置
3. `cd learning_online`
4. `npm run dev`，`npm start`帮我们打包，启动项目
5. 在`http://localhost:8080`查看项目

### 使用vux
> 移动端UI组件库:[vux](https://doc.vux.li/zh-CN/)
> 参考：[小白用vux](https://www.jianshu.com/p/930d9bb22736)

1. 在项目里安装vux：`npm install vux --save`
2. 安装vux-loader：`npm install vux-loader --save-dev`
3. 安装less-loader（这个是用以正确编译less源码，否则会出现 ' Cannot GET / '）
    `npm install less less-loader --save-dev`
4. 安装yaml-loader（以正确进行语言文件读取，不装也ok）
    `npm install yaml-loader --save-dev`
5. 在build文件夹下`webpack.base.conf.js`文件进行配置
    在文件头部加上
    ```js
    const vuxLoader = require('vux-loader')
    ```

    修改原来的`module.exports ={...}`为`const webpackConfig = {...}`
    ```js
    const webpackConfig = { // 原来的 module.exports 代码赋值给变量 webpackConfig
    ...
    }
    ```

    在文件末尾加上
    ```js
    module.exports = vuxLoader.merge(webpackConfig, { plugins: ['vux-ui'] })
    ```

    记得修改此处，extensions里加上.less
    ```js
    resolve: {
        extensions: ['.js', '.vue', '.json','.less'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        }
    },
    ```

### 项目结构优化
1. 改写src->router->index.js，不引用helloworld组件
2. 删除src->components目录，因为不需要再用到这个单文件组件
3. 在src下新建pages文件夹，pages内新建home文件夹，home内新建Home.vue文件（单文件组件）
4. 改写src->router->index.js
5. 删除app.vue里不需要用到的内容

# 项目代码初始化
> [https://blog.csdn.net/gm0125/article/details/91390885](https://blog.csdn.net/gm0125/article/details/91390885)

1. 新添reset.css，对基本的样式进行设置
2. 新增border.css，解决移动端1px边框的问题
3. 在项目依赖中安装fastclick包，用于解决移动端点击延时300ms问题
    `npm install fastclick --save`
4. 在[iconfont](https://www.iconfont.cn/)上创建自己的项目
5. 做一些无用代码的删除

# 使用vuex进行状态管理
* `npm install vuex --save`
* 在src文件夹下新建store文件夹，在其中新建index.js
* 在main.js中使用store

* [vuex官方文档](https://vuex.vuejs.org/zh/guide/)

# 界面开发
- [x] 底部导航
- [ ] 首页
    - [x] 搜索框
    - [x] 新闻轮播图
    - [x] 新闻消息条
    - [x] 会员分类栏
    - [x] 推荐课程
- [ ] 消息
    - [x] 课程消息
    - [ ] 课程回复内页
- [ ] 我的学习
- [ ] 账号
    - [ ] 已购课程
    - [x] 完成课程
    - [x] 我的成绩
    - [x] 我的证书
- [ ] 新闻详情页
- [ ] 课程详情页
- [ ] 课程学习页
    - [ ] 留言



# 注意：
axios本身并不支持发送跨域的请求，没有提供相应的API，所以只能使用第三方库vue-resource.
`npm install --save vue-resource`
`npm install axios --save`

[解决内容过多时，底部导航栏不固定的问题](https://blog.csdn.net/qq_41009742/article/details/85330503)

参考：
* [角标css实现](https://www.cnblogs.com/liulinjie/p/8484525.html)
* [如何用vuex来管理顶部导航栏显示隐藏（状态管理）](https://blog.csdn.net/qq_33026699/article/details/80746008)
* [《Vux踩坑记》 之 Tabbar](https://blog.csdn.net/weixin_34411563/article/details/91943570)