/*eslint-disable */
const path = require('path')
const os = require('os')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')

const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const dllManifestDir = path.resolve(__dirname, './manifest/prod')

const webpackConfig = merge(baseWebpackConfig, {
  devtool: '#source-map',
  entry: {
    main: path.resolve(__dirname, '../src/main')
  },
  output: {
    path: path.resolve(__dirname, '../static/static'),
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/static/',
    chunkFilename: 'js/chunks/[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "less-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        dead_code: true
      },
      sourceMap: config.build.productionSourceMap
    }),
    // new ParallelUglifyPlugin({
    //   workerCount: os.cpus().length,
    //   sourceMap: config.build.productionSourceMap,
    //   cacheDir: '.cache/uglify/prod/',
    //   uglifyJS: {
    //     output: {
    //       comments: false
    //     },
    //     compress: {
    //       warnings: false,
    //       drop_debugger: true,
    //       drop_console: true
    //     },
    //     mangle: true
    //   }
    // }),
    new CleanWebpackPlugin([path.resolve(__dirname, '../static')], {
      allowExternal: true,
      exclude: ['.git']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
      minChunks: Infinity
    }),
    new webpack.DllReferencePlugin({
      context: dllManifestDir,
      manifest: require(path.join(dllManifestDir, 'vendor-manifest.json'))
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash:8].min.css',
      disable: false,
      allChunks: true
    }),
    new OptimizeCSSPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve(__dirname, '../src/static/index-template.html'),
      minify: {},
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../build/dll/prod'),
        to: path.resolve(__dirname, '../static/static/js/dll'),
        ignore: ['.*']
      }
    ])
  ]
})

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

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
