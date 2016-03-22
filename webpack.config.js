var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
        {
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: [/node_modules/, /styles/],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css?sourceMap', 'sass?sourceMaps']
        },
        {
            test: /\.(png|jpg|ttf)$/,
            loader: 'url-loader'
        }
    ]
  }
};
