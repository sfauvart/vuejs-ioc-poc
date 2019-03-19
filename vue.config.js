const path = require('path');

module.exports = {
  chainWebpack: config => {
    const apiImpl = process.env.VUE_APP_API_CLIENT_IMPL || 'APIHTTPImpl'; // mock or server

    config.resolve.alias.set(
      'api-impl',
      path.resolve(__dirname, `src/api/${apiImpl}`)
    );

    config.resolve.alias.set(
      'ioc-container',
      path.resolve(__dirname, `src/ioc`)
    );
  },
};
