const path = require('path');

module.exports = {
  chainWebpack: config => {
    // https://goenning.net/2017/07/21/how-to-avoid-relative-path-hell-javascript-typescript-projects/
    config.resolve.alias.set(
      '@app',
      path.resolve(__dirname, `src/`)
    );
  },
};
