const path = require('path');
const webpack      = require('webpack');

module.exports = {
  entry: {
      app: './src/index.js'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015', 'stage-1']
            }
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
      modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  plugins: new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
  }),
  devServer: {
      port: 5000,
      historyApiFallback: true,
      contentBase: './'
  }
};
