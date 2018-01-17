/*eslint-disable */
const path = require('path')
const os = require('os')
const { argv } = require('yargs')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const HappyPack = require('happypack');
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const assetsPath = function (_path) {
  const assetsSubDirectory = path.join(__dirname, '../static/assets')
  return path.posix.join(assetsSubDirectory, _path)
}

const resolve = (_path) => {
  return path.resolve(__dirname, `../${_path}`)
}

const webpackConfig = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'redux-actions': resolve('src/libs/redux-actions'),
      'redux-api-middleware': resolve('src/middleware/api-middleware'),
      '@views': resolve('src/views'),
      '@helpers': resolve('src/helpers'),
      '@store': resolve('src/redux')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory=true',
        // loader: 'happypack/loader?id=jsx',
        include: resolve('src'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|ico)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    // new HappyPack({
    //   id: 'jsx',
    //   threadPool: happyThreadPool,
    //   loaders: ['babel-loader?cacheDirectory=true']
    // })
  ]
}

if (argv.pre === 'yes') {
  webpackConfig.module.rules.unshift({
    test: /\.(js|jsx)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src')],
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  })
}

module.exports = webpackConfig
