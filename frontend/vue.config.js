module.exports = {
  publicPath: '/',
  runtimeCompiler: true,
  configureWebpack: {
    entry: './src/main.js',
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js'
      }
    }
  },
  devServer: {
    port: 3000,
    hot: true,
    client: {
      overlay: false
    }
  }
}
