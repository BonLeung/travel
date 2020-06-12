const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', path.join(__dirname, './src/components'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
