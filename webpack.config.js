const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

let plugins = [
  new HtmlWebpackPlugin({
    title: "index page",
    filename: "index.html",
    template: "src/index.html",
    chunks: ["main"],
  }),
];
module.exports = {
  mode: "development",
  // entry: {
  //   main: path.resolve(__dirname, "src/index.js"),
  //   auth: path.resolve(__dirname, "src/features/auth/auth.js"),
  // },
  entry: () => {
    const entry = {};
    glob.sync("./src/features/**/*.js").forEach((file) => {
      const componentName = path.basename(file, ".js");
      entry[componentName] = file;
    });

    entry.main = path.resolve(__dirname, "src/index.js");
    return entry;
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.min.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  target: ["web", "es5"],
  // optimization: {
  //   minimize: true,
  // },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 5001,
    // open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    modules: ["node_modules"],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "index page",
  //     filename: "index.html",
  //     chunks: ["main"],
  //   }),
  //   new HtmlWebpackPlugin({
  //     title: "login page",
  //     filename: "login.html",
  //     template: path.resolve(__dirname, "src/features/auth/login.html"),
  //     chunks: ["auth"],
  //     excludeChunks: ["auth.js"],
  //   }),
  // ],
  plugins,
};

glob.sync("./src/features/**/*.html").forEach((file) => {
  const componentName = path.basename(file, ".html");
  plugins.push(
    new HtmlWebpackPlugin({
      template: file,
      filename: `./features/${componentName}.html`,
      chunks: [ componentName],
    })
  );
});
