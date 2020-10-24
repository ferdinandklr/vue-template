const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    sourceMap: false
  },
  publicPath: '/',
  outputDir: 'dist/client/',
  lintOnSave: true,
  configureWebpack: {
    performance: {
      maxAssetSize: 500000
    },
    plugins: [
      new CopyWebpackPlugin([{ from: 'frontend/public/', to: '' }])
    ]
  },
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./frontend/src/main.js')
      .end()
    config.resolve.alias
      .set('@', path.join(__dirname, './frontend/src'))
  }
}
