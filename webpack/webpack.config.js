const path = require("path");
const rootPath = path.join(__dirname, "../");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const _ = require("lodash");
const env = _.trim(process.env.NODE_ENV);

console.log(path.join(rootPath, "src/app.js"));

const webpackConfig = {
  devtool: "module-source-map",
  entry: ["babel-polyfill", path.join(rootPath, "src/index.js")],
  output: {
    path: rootPath + "/dist",
    filename: "[name].[chunkhash:8].bundle.js",
    publicPath: "/", // 打包时，是否添加前缀
    chunkFilename: "[name]-[id].[chunkhash:8].bundle.js"
  },
  devServer: {
    contentBase: rootPath + "/src/assets/", // 本地服务器所加载的页面所在的目录
    host: "0.0.0.0",
    port: 9002,
    disableHostCheck: true,
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    proxy: {
      "/api": {
        target: "http://10.104.209.82:9001/",
        changeOrigin: true
        // secure: true
      }
    }
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "stage-0", "react"],
            plugins: [["import", { libraryName: "antd", style: "css" }]]
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
        // exclude: /node_modules/,
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
            // "postcss-loader"
          ]
        })
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "file-loader"
        // options: {
        //   name: "[name].[ext]"
        // }
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
            // "postcss-loader",
            "less-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "main.css",
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: "./index.html", // 生成的html存放路径，相对于 path
      template: rootPath + "/index.html", // html模板路径
      hash: true, // 为静态资源生成hash值
      inject: "body"
    }),
    new CopyWebpackPlugin([
      {
        from: rootPath + "/src/assets",
        to: "./"
      }
    ]),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: function() {
    //       return [require("autoprefixer")];
    //     }
    //   }
    // }),
    new webpack.DllReferencePlugin({
      context: rootPath + "/webpack",
      name: "vendor",
      manifest: require(path.resolve(
        rootPath,
        "./src/assets/library/dll/main-manifest.json"
      ))
    }),
    new webpack.DefinePlugin({
      env: "'" + env + "'"
    })
  ]
};

if (env !== "dev") {
  console.log(
    "=============================start uglify============================="
  );
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
}

module.exports = webpackConfig;
