module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  devServer: {
     inline: true,
     port: 8080
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
