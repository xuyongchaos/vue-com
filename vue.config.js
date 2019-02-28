const path = require("path")

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  assetsDir: 'static',
  publicPath: '/',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('stykes', resolve('./src/assets/styles'))
  }
}