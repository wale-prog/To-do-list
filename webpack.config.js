const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
       index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
      ],
    output: {
        filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //     runtimechunk: 'single', // This block of code can be use when there is more than one entry point, in cases where code splitting is used.
    // },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
  };