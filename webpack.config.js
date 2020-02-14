const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  devServer: {
    port: 7890,
    historyApiFallback: true
  },
  plugins: [
    new HTMLPlugin({ 
      template: './src/index.html',
      favicon: './public/favicon.ico'
    }),
    new CleanWebpackPlugin,
    new CopyPlugin([
      { from: 'public' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }]
      },
      { 
        enforce: 'pre', 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'source-map-loader' 
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      },
      {
        test: /.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  devtool: 'source-map',
};
