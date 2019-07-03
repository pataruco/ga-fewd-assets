// @ts-ignore
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
export const favicon = path.resolve(__dirname, '../src/images/ga-logo.png');

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
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
      title: '¡Gracias totales!',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin(favicon),
  ],
  // @ts-ignore
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    stats: 'errors-only',
  },
  node: {
    net: 'empty',
    fs: 'empty',
  },
};

export default config;
