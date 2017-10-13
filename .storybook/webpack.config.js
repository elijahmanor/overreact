const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  if (env === "PRODUCTION") {
    // see https://github.com/storybooks/storybook/issues/1570
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== "UglifyJsPlugin");
  }

  return config;
};
