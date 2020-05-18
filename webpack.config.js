module.exports = {
  mode:  process.env.NODE_ENV||"development",
  entry: "./front/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "public"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  performance: {
    maxAssetSize: 200000,
    maxEntrypointSize: 200000,
    hints: false
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },

  devtool: "source-map"
};
