const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin({
    languages: ['json']
  }));
//   config.module.rules = [{
//     test: /\.css$/,
//     use: ['style-loader', 'css-loader']
//   }, {
//     test: /\.ttf$/,
//     use: ['file-loader']
//   }];
  return config;
};