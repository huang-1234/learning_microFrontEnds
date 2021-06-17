// config-overrides.js
const path = require('path');

const pathResolve = (_path) => path.resolve(__dirname, _path);

process.env.PORT = 2335;

// react-app-rewired: webpack配置覆盖
module.exports = {
  webpack: function override(config, env) {
    config.entry = pathResolve('src/index.tsx');

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': pathResolve('src'),
    };

    config.output = {
      ...config.output,
      publicPath: '',
      libraryTarget: 'system',
      filename: 'js/app.js',
      chunkFilename: 'js/[name].[contenthash:8].js',
    };

    // console.log(config.output);
    // process.exit(1);

    delete config.optimization;

    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      return {
        ...config,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        disableHostCheck: true,
        sockHost: 'localhost',
        sockPort: 2335,
        port: 2335,
        hot: true,
      };
    };
  },
  paths: function (paths, env) {
    return paths;
  },
  jest: function (config) {
    if (!config.testPathIgnorePatterns) {
      config.testPathIgnorePatterns = [];
    }
    if (!process.env.RUN_COMPONENT_TESTS) {
      config.testPathIgnorePatterns.push(
        '<rootDir>/src/components/**/*.test.js'
      );
    }
    if (!process.env.RUN_REDUCER_TESTS) {
      config.testPathIgnorePatterns.push('<rootDir>/src/reducers/**/*.test.js');
    }
    return config;
  },
};
