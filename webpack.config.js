const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: './src/main.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
    bootstrapjs: './node_modules/bootstrap/dist/js/bootstrap.min.js',
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    historyApiFallback: true,
    hot: "only",
    port: 8001
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    })
  ]
}