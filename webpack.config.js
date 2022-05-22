const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const DotenvWebpackPlugin = require('dotenv-webpack')
const webpack = require('webpack');
require('dotenv').config({path: './.env'});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    /* This is a setting for the webpack dev server. It tells the server to fallback to index.html if
    the route is not found. */
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    // new DotenvWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.PAYPAL_CLIENT_ID': JSON.stringify(process.env.PAYPAL_CLIENT_ID),
      'process.env.POSITIONTRACK_API_KEY': JSON.stringify(process.env.POSITIONTRACK_API_KEY),
		}),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    /* This is a setting for the webpack dev server. It tells the server to fallback to index.html if
    the route is not found. */
    historyApiFallback: true,
    port: 3000,
  },
};
