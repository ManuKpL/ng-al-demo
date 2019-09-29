// these packages had to be installed via npm
// es2015 import syntax means we have to use the esm package when using webpack cli
import { resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
  // our main source file that should import almost all other files
  entry: resolve(__dirname, './src/main.ts'),

  // define where the files created by webpack should go
  // and how they should be named
  output: {
    publicPath: './',
    filename: '[name].[hash].bundle.js',
    path: resolve(__dirname, './dist'),
  },

  // define which webpack its built-in optimizations should be used
  mode: 'development',

  module: {
    // define the loaders to apply for specific types of files
    rules: [
      // load JS files with the babel loader
      // (ensure backward compatiblity with more browsers)
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
      },

      // load TS files with the typescript & babel loaders
      // (transpilation + backward compatiblity with more browsers)
      {
        test: /\.ts$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_module/,
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // loader associated to the plugin creating new css files
          'css-loader', // converts css to raw style string
          'postcss-loader', // uses plugins defined in postcss.config to enrich the produced css
          'sass-loader', // uses node-sass to convert sass/scss style to css
        ],
        exclude: /node_module/,
      },
    ],
  },
  plugins: [
    // removes the content of the output directory before adding new content
    new CleanWebpackPlugin(),

    // copies a template html file into the output directory
    // and injects links to all webpack compiled files
    new HtmlWebpackPlugin({
      // define the name of the new html file created
      filename: 'index.html',

      // defined the path to the template file to copy and inject into
      template: resolve(__dirname, './src/index.html'),
    }),

    // creates new files containing the css extracted
    // from the style raw string created by the css-loader
    new MiniCssExtractPlugin({
      // define the name of the new css file created
      filename: '[name].bundle.css',
    }),
  ],

  // controls what bundle information gets displayed in the consolde
  stats: {
    children: false,
  },

  // create .map files associated to the files outputed by webpack
  // to allow mapping (debug) between original and compiled files
  devtool: 'source-map',

  // when set to true, keeps the webpack process runing
  // and reacting to changes in the entry files
  watch: true,
};

// es2015 export syntax means we have to use the esm package when using webpack cli
export default config;
