const webpack = require('webpack');
const path = require('path');

const env = process.env.WEBPACK_ENV;

const libraryName = 'kwulers';

let outputFile;


module.exports = (env, options) => {
  if (options.mode === 'production') {
    outputFile = libraryName + '.min.js';
  } else {
    outputFile = libraryName + '.js';
  }
  return {
    entry: __dirname + '/src/' + libraryName + '.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/dist',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },

    module: {
      rules: [
        {
          enforce: "pre",
          test: /(\.jsx|\.js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'eslint-loader',
          }
        },
        {
          test: /(\.jsx|\.js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
      ]
    }
  };
};