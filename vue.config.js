'use strict'
// const defaultSettings = require('./src/settings.js')

// const port = 9098 // dev port
const port = 8080 // dev port

module.exports = {
  publicPath: '/bizhi/',
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
        // target: `http://10.10.80.34:${port}`, // 测试环境
        target: `http://10.10.10.15:${port}`, // 陈亮
        // target: `https://apply.data.raiyi.cn`, // 生产环境
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
