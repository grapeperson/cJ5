const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
  mode: 'development',
  entry:['./src/index.js'],
  output:{
    path:path.resolve(__dirname,'public'),
    filename:'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  module:{
    rules:[
      {
        test: /\.pug$/,
        use: ['html-loader','pug-html-loader?pretty=true']
      },
      {
        test: /\.scss$/,
        use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: "fonts/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]

}
