const path = require("path");

module.exports = (baseConfig, env) => {
  baseConfig.resolve.extensions.push(".ts", ".tsx");

  baseConfig.module.rules[0].test = /\.(ts|tsx)$/;

  baseConfig.module.rules.unshift({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader"),
    include: [path.resolve(__dirname, "../src")],
    options: {
      trarnspileOnly: true
    }
  });

  // [ts-loader, babel-loader, ...]

  return baseConfig;
};
