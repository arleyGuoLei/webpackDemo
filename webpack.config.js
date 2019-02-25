'use strict';

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 模式 production development
  entry: './src/index.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js' // 打包后的文件名
  },
  devServer: { //开发服务器的配置
    port: 1997,
    progress: true,
    contentBase: './dist',
    compress: true, // 启用压缩
    open: true // 自动打开浏览器
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html', // 打包模板
      filename: 'index.html', // 输出的文件
      // minify: {
      //   removeAttributeQuotes: true, //删除双引号
      //   collapseWhitespace: true // 压缩成一行
      // },
      hash: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从下至上的顺序执行loader
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.stylus$/,
        // 从下至上的顺序执行loader
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  }
};
