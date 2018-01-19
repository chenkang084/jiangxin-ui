const path = require("path");
const rootPath = path.join(__dirname, "../");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(path.join(rootPath, "src/app.js"));

const webpackConfig = {
  devtool: "module-source-map",
  entry: [path.join(rootPath, "src/app.js")],
  output: {
    path: rootPath + "/dist",
    filename: "[name].[chunkhash:8].bundle.js",
    // publicPath: "./public", // 打包时，是否添加前缀
    chunkFilename: "[name]-[id].[chunkhash:8].bundle.js"
  },
  devServer: {
    contentBase: rootPath + "/build/", // 本地服务器所加载的页面所在的目录
    host: "0.0.0.0",
    port: 9002,
    historyApiFallback: true, // 不跳转
    inline: true // 实时刷新
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
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 根据模板插入css/js等生成最终HTML
      filename: "./index.html", // 生成的html存放路径，相对于 path
      template: rootPath + "/index.html", // html模板路径
      hash: true, // 为静态资源生成hash值
      inject: "head"
    })
  ]
};

module.exports = webpackConfig;
