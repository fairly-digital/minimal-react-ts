// eslint-disable-next-line
const path = require('path');
// eslint-disable-next-line
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    compress: true,
    port: 9000
  }
};