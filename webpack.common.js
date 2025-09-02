// webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",                    
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",       
    clean: true,
    publicPath: "/"                            
  },
  module: {
    rules: [
      // JSX / TSX via Babel
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",      
    }),
  ],
};
