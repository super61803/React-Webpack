const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction
        ? "static/js/[name].[contenthash:8].js"
        : "static/js/bundle.js",
      clean: true,
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico|woff2?|eot|ttf|otf)$/i,
          type: "asset",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, "public"),
      },
      historyApiFallback: true,
      port: 3000,
      hot: true,
      open: true,
      compress: true,
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    performance: {
      hints: isProduction ? "warning" : false,
    },
  };
};
