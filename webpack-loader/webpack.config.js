const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', // string | object | array
  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, 'dist'), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: 'js/[name].bundle.js'
  },
  plugins: [new htmlWebpackPlugin({filename: 'index.html', template: 'index.html', inject: 'body'})],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['latest']
  //       }
  //     }
  //   ]
  // }
}
