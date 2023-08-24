const path = require('path');
const webpack = require('webpack');
const HelloWorld = require('./plugins/HelloWorld');
const FileAsync = require('./plugins/FileAsync');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 基础版本 用HelloWorld

// module.exports = {
//   entry: './src/index.js',
//   mode: 'production',
//   output: {
//     // 把所有依赖的模块合并输出到一个 bundle.js 文件
//     filename: 'bundle.js',
//     // 输出文件都放到 dist 目录下
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         // 用正则去匹配要用该 loader 转换的 CSS 文件
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin(),
//     new HelloWorld({
//       env: 'prod',
//     }),
//   ],
// };

// 高级版本  用FileAsync.js
module.exports = {
  entry: {
    main: './src/main.js',
    index: './src/index.js',
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new FileAsync()],
};
