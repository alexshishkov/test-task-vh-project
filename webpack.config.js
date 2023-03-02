require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
],
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
};
