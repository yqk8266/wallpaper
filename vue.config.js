'use strict'
// const defaultSettings = require('./src/settings.js')

// const port = 9098 // dev port
const port = 8082 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: port, // 前端启动端口号
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        // target: `http://127.0.0.1:${port}/mock`, // mock
        // target: `http://wx.dsger.cn`, // 测试环境
        target: `http://10.10.10.14:5080`, // 吴全林
        // target: `http://wp.8yx.co/wp-api`, // 生产
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
