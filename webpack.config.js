/* eslint-disable */
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  const plugins = [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "./index.html",
      // favicon: "src/static/images/favicon.png"
    }),
    new MiniCssExtractPlugin({
      filename: "./index.css",
    }),
    // new CompressionPlugin(),
  ];

  return {
    entry: ["@babel/polyfill", "./src/index.tsx"],
    mode: "development",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
    },

    // 幫助webpack輸出檔案debug
    devtool: "source-map",
    plugins,

    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/typescript", "@babel/preset-env"],
            },
          },
        },
        {
          test: /.tsx$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/typescript",
                "@babel/preset-react",
                "@babel/preset-env",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'] //在Webpack中，loader的执行顺序是从右向左执行的，webpack先将所有css模块依赖解析完得到计算结果再创建style标签。因此把style-loader放在css-loader的前面。
        },
        {
          test: /\.less$/,
          use: [{
            loader: 'style-loader'
          },{
            loader: 'css-loader'
          },{
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {'@primary-color': '#1890ff'}
            }
          }]
        },
        {
          test: /\.(sass|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ],
    },
    devServer: {
      host: "localhost",
      port: 8080,
      https: false,
      // https: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  };
};
