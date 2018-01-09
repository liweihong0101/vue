const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js',
    a: './src/js/a.js',
    b: './src/js/b.js',
    c: './src/js/c.js',
  }, // string | object | array
  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, 'dist'), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: 'js/[name]-[chunkhash].js',
    publicPath: 'http://cdn.com'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: 'index.html',
      inject: false,
      title: 'this is a.html!',
      excludeChunks: ['b','c']
    }),
    new htmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      inject: false,
      title: 'this is b.html!',
      excludeChunks: ['a','c']
    }),
    new htmlWebpackPlugin({
      filename: 'c.html',
      template: 'index.html',
      inject: false,
      title: 'this is c.html!',
      excludeChunks: ['a','b']
    })
  ]
}
