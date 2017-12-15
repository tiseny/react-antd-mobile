/*eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('../config')

const _PROP = process.env.NODE_ENV === 'production'
const dllDir = path.join(__dirname, `./dll/${_PROP ? 'prod' : 'dev'}`)
const manifestDir = path.join(__dirname, `./manifest/${_PROP ? 'prod' : 'dev'}`)

const webpackConfig = {
  entry: {
    vendor: [
      'es6-promise',
      'history',
      'isomorphic-fetch',
      'lodash',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux'
    ],
  },
  output: {
    path: dllDir,
    filename: _PROP ? '[name].[chunkhash:8].js' : '[name].js',
    library: '[name]'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ProgressBarPlugin(),
    new CleanWebpackPlugin([dllDir, manifestDir], {
      allowExternal: true
    }),
    new webpack.DllPlugin({
      path: `${manifestDir}/[name]-manifest.json`,
      name: '[name]',
      context: manifestDir
    })
  ]
}

if (_PROP) {
  webpackConfig.output.publicPath = '/static/js/dll/'
  webpackConfig.plugins.splice(1, 0, new webpack.HashedModuleIdsPlugin())
  webpackConfig.plugins.splice(2, 0, new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true
    },
    sourceMap: false
  }))

  if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    webpackConfig.plugins.push(new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(`\\.(${
        config.build.productionGzipExtensions.join('|')
        })$`),
      threshold: 10240,
      minRatio: 0.8
    }))
  }

  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    filename: '../../../src/static/index-template.html',
    template: path.resolve(__dirname, '../src/static/index-dll-template.html'),
    minify: {},
    inject: 'body'
  }))
} else {
  webpackConfig.output.publicPath = '/build/dll/dev/'
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    filename: '../../../index.html',
    template: path.resolve(__dirname, '../src/static/index-dll-template.html'),
    minify: {},
    inject: 'body'
  }))
}

module.exports = webpackConfig
