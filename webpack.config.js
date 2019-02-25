'use strict';

const path = require('path');

module.exports = {
  mode: 'development', // 模式 production development
  entry: './src/index.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // 打包后的文件名
  },
  devServer: { //开发服务器的配置
    port: 1997,
    progress: true,
    contentBase: './dist',
    compress: true, // 启用压缩
    open: true // 自动打开浏览器
  }
};
