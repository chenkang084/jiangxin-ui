"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack"),
  path = require("path"),
  rootPath = path.resolve(__dirname, "../");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const _ = require("lodash");
const env = _.trim(process.env.NODE_ENV);

module.exports = {
  entry: ["react", "react-dom", "antd", "babel-polyfill"],
  output: {
    path: rootPath + "/src/assets/library/dll", //打包后的文件存放的地方
    filename: "vendor.dll.js", //打包后输出文件的文件名
    library: "vendor"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "stage-0", "react"],
            plugins: [
              [
                "import",
                { libraryName: "antd", libraryDirectory: "es", style: "css" }
              ]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: env === "dev" ? false : true,
                sourceMap: false
              }
            }
          ]
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: false,
                minimize: env === "dev" ? false : true,
                importLoader: 1,
                localIdentName: "[hash:base64:5]"
              }
            },
            "postcss-loader",
            "less-loader"
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("main.css"),
    new webpack.ProvidePlugin({
      Squire: "Squire"
    }),

    new webpack.DllPlugin({
      path: path.resolve(
        rootPath,
        "./src/assets/library/dll/[name]-manifest.json"
      ),
      name: "[name]"
    }),
    new UglifyJsPlugin()
  ],
  resolve: {
    modules: ["node_modules", path.join(rootPath, "./node_modules")],
    extensions: [".web.js", ".js", ".json"]
  }
};
