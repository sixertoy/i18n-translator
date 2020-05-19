// eslint-disable-next-line import/no-extraneous-dependencies
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// NOTE CRACO Webpack Config Override
// https://www.npmjs.com/package/@craco/craco
module.exports = {
  reactScriptsVersion: 'react-scripts',
  webpack: {
    plugins: [
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ['json'],
      }),
    ],
  },
};
