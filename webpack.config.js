// these packages had to be installed via npm
// es2015 import syntax means we have to use the esm package when using webpack cli
import { resolve } from 'path';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const config = {
  entry: {
    // vendors source file, i.e. external module loaded to allow the app to work
    // (must be loaded first)
    vendors: resolve(__dirname, './src/vendors'),

    // our main source file that should import almost all other files
    main: resolve(__dirname, './src/main.ts'),
  },

  // define where the files created by webpack should go
  // and how they should be named
  output: {
    publicPath: './',
    filename: '[name].[hash].bundle.js',
    path: resolve(__dirname, './dist'),
  },

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
        use: ['babel-loader', 'awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /node_module/,
      },

      // load template files
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_module/,
      },

      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          'css-loader', // converts css to raw style string
          'postcss-loader', // uses plugins defined in postcss.config to enrich the produced css
        ],
        exclude: /node_module/,
      },

      // load Style files
      {
        test: /\.scss$/,
        use: [
          'to-string-loader',
          'css-loader', // converts css to raw style string
          'postcss-loader', // uses plugins defined in postcss.config to enrich the produced css
          'sass-loader', // uses node-sass to convert sass/scss style to css
        ],
        exclude: /node_module/,
      },

      // load favicon
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader', // this loader will copy the input file into the output dir
            options: {
              name: '[name].[ext]', // determines the name of the file after it is copied
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // copies a template html file into the output directory
    // and injects links to all webpack compiled files
    new HtmlWebpackPlugin({
      // define the name of the new html file created
      filename: 'index.html',

      // defined the path to the template file to copy and inject into
      template: resolve(__dirname, './src/index.html'),
    }),

    // prevent angular dependency request warning by setting ./src folder as root
    new webpack.ContextReplacementPlugin(/(.+)?angular(\\|\/)core(.+)?/, resolve(__dirname, './src'), {}),

    // defines global variables to be used in the bundled app
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(isProd),
    }),
  ],

  // controls what bundle information gets displayed in the consolde
  stats: {
    children: false,
    warningsFilter: /System.import/, // removes warning due to deprecated code in @angular transitive dependencies
  },

  resolve: {
    // if a file is imported without its explicit extension,
    // webpack will try to find <filename>.ts then <filename>.js
    extensions: ['.ts', '.js'],

    plugins: [new TsConfigPathsPlugin()],
  },
};

if (isProd) {
  Object.assign(config, {
    // define which webpack its built-in optimizations should be used
    mode: 'production',
    plugins: [
      ...config.plugins,

      // removes the content of the output directory before adding new content, except .gitkeep
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep'],
      }),
    ],
  });
} else if (isDev) {
  Object.assign(config, {
    // define which webpack its built-in optimizations should be used
    mode: 'development',

    plugins: [
      ...config.plugins,
      new webpack.HotModuleReplacementPlugin(), // uses hot reload, sending only changed data after new bundle
    ],

    // create .map files associated to the files outputed by webpack
    // to allow mapping (debug) between original and compiled files
    devtool: 'source-map',

    devServer: {
      publicPath: '/', // define the path for all relative path referenced files
      port: 1337, // define which port to use in dev mode
      historyApiFallback: true, // if path matches no server side rendering, fallback /
    },
  });
}

// es2015 export syntax means we have to use the esm package when using webpack cli
export default config;
