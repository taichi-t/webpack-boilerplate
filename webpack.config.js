const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    chunkIds: 'named'
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>test</title>
      </head>
      <body>
      </body>
      </html>
  `,
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist/'),
    watchContentBase: true,
    inline: true,
  },
}