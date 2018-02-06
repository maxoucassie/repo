var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'src');


const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin({ filename: 'css.bundle.css' })
const extractSASS = new ExtractTextPlugin({ filename: 'sass.bundle.css' })

module.exports = {

  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader'
      },
      {
        test : /\.css$/,
        loader : 'css-loader'
      },
     {
        test : /\.png$/,
        loader : 'url-loader?limit=1'
      },
      {
        test : /\.jpg$/,
        loader : 'file-loader'
      }

    ],
    /*rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
            }
        }, {
            loader: "sass-loader", options: {

            }
        }]
    }]
    */
  }
};

