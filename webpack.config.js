const webpack = require('webpack');
const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
              esModule: false
            }
          }
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: ImageMinimizerPlugin.loader,
      //       // enforce: "pre",
      //       options: {
      //         minimizer: {
      //           implementation: ImageMinimizerPlugin.imageminMinify,
      //           options: {
      //             plugins: [
      //               "imagemin-pngquant"
      //             ],
      //           },
      //         },
      //       },
      //     },
      //   ],
      // },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  // optimization: {
  //   minimizer: [
  //     "...",
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           // Lossless optimization with custom option
  //           // Feel free to experiment with options for better result for you
  //           plugins: [
  //             ["optipng", { optimizationLevel: 5 }]
  //           ],
  //         },
  //       },
  //     }),
  //   ],
  // },
};

module.exports = config;