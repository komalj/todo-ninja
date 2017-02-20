
module.exports = {
  entry: "./src/Main.js",
  output: {
    filename: "bundle.js"
  },
  devServer:{
    inline:true
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader?presets[]=es2015,presets[]=react"]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader?presets[]=es2015,presets[]=react"]
      },
    ],
  },
}