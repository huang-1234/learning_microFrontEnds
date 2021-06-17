const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "study",
    projectName: "todos",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // 默认情况下是会将react-router-dom也打包，但是你只需要再single-spa里面打包就可以了，应该需要再todos的webpack的配置里排除react-router-dom
    externals: ["react-router-dom"],
  });
};
