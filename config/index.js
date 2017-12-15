const path = require('path')
const DEV = process.env.NODE_ENV !== 'production'

module.exports = {
  DEV,                       // 环境变量
  baseAlias: '',             // 子目录
  apiDomain: '/api',         //请求前缀
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../static/index.html'),
    assetsRoot: path.resolve(__dirname, '../static'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    host: '127.0.0.1',
    port: 5006,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        //target: 'http://dmp-admin-dev.mypaas.com.cn',
        target: 'http://10.5.1.123:8102/api',
        changeOrigin: true,

        //修改代理响应头cookie域名与开发域名一致，方便登录认证
        cookieDomainRewrite:'127.0.0.1', 
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    cssSourceMap: true
  }
}
