'use strict';

const path = require('path');

module.exports = {
  mode: 'development', // 模式 production development
  entry: './src/index.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // 打包后的文件名
  }
};
