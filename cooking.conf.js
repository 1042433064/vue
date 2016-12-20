var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  dist: './dist',
  template: './index.tpl',
  devServer: {
    port: 8081,
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {'^/api' : ''},
        //secure: false
      }
    }
  },

  // production
  clean: true,
  hash: true,
  //sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src'),
    'vue'  : 'vue/dist/vue.min',
    //'jquery'  : '/src/oldjs/primary/plugins/datetimepicker/sample in bootstrap v3/jquery/jquery-1.8.3.min'
  },
  extends: ['vue2', 'less', 'autoprefixer']
});

module.exports = cooking.resolve();
