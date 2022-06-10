const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/', // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: process.env.VUE_APP_OUTPUTDIR || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本

  // css相关选项
  css: {
    // 为预处理器 loader 传递自定义选项
    loaderOptions: {
      scss: {
        additionalData:
          '@import "~@/assets/css/element-variables.scss";@import "~@/assets/css/layout-variables.scss";'
      }
    }
  },

  configureWebpack: (config) => {
    config.resolve = {
      // 配置解析别名
      extensions: ['.js', '.json', '.vue'], // 自动添加文件后缀名
      alias: {
        '@': resolve(__dirname, './src'),
        '@assets': resolve(__dirname, './src/assets'),
        '@components': resolve(__dirname, './src/components')
      }
    }
  },

  devServer: {
    // 全屏模式下是否显示脚本错误
    // overlay: {
    //   // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    // host: "localhost",
    port: 9090, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    // hot: 'only', // 开启热加载
    // hotOnly: false, // 热更新
    // 设置代理
    proxy: {
      // 配置多个跨域
      [process.env.VUE_APP_API]: {
        // 目标代理服务器地址
        target: process.env.VUE_APP_BASE_URL,
        // 允许跨域
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          [`^${process.env.VUE_APP_API}`]: '/'
        }
      }
    }
  }
})
