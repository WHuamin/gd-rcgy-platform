# gz-rcgy-platform

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## git 代码管理分支
```
framework 项目架构分支
```

## vue.config.js 项目配置
```
配置打包环境变量：
1.作用：请求的地址在开发线、测试线、和正式线中肯定是不一样的，为了省去每次打包之前去改的麻烦，所以配置打包环境变量解决这个问题。

2.环境变量名字格式为：.env.xxxx，前面.env是固定的后面可以自定义
local代表本地、development代表开发环境、test代表测试环境、production代表生产环境

3.定义变量
只有VUE_APP开头的变量和NODE_ENV和BASE_URL才有效哦，所以我定义了如下变量；

4.使用
① 在package.json里面添加如下代码:
"scripts": {
    "dev": "vue-cli-service serve --mode development",
    "test": "vue-cli-service serve --mode test",
    "pro": "vue-cli-service serve --mode production",
    "build": "vue-cli-service build", //默认生产环境
    "build:test": "vue-cli-service build --mode test"
  },

② 在项目里调用：process.env.xxxx

```

## ElementUI 安装UI框架
```
安装依赖：npm install element-plus --save
```

## constant目录 存放项目常量
```
1.website.config.js 存放网站信息配置

```

## vuex
```

```