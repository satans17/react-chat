var path = require('path');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [],
  entry: {
    'src/app': ['./src/app.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: "[name].js",
    chunkFilename: "[name].js"
  }
};