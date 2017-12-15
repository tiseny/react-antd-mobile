/*eslint-disable */
process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

console.log(chalk.cyan('building for production...\n'))

webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  process.stdout.write(`${stats.toString({
    colors: true,
    modules: true,
    children: false,
    chunks: true,
    chunkModules: false
  })}\n\n`)

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'))
})
