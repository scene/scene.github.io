var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    mode: 'development',
    rules: [
      {
        test: /\.ts|.jsx$/,
        use: [
          'ts-loadig'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({

    })
  ]
}