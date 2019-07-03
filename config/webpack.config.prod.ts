// @ts-ignore
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import TerserJSPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { favicon } from './webpack.config.dev';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GA FEWD Assets',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: './[name].css',
    }),
    new FaviconsWebpackPlugin({
      logo: favicon,
      emitStats: true,
      statsFilename: 'iconstats-[hash].json',
      title: 'Gracias totales',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: false,
      },
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({ extractComments: true }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

export default config;
