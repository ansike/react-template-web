const {
  override,
  addLessLoader,
  adjustStyleLoaders,
  overrideDevServer,
} = require("customize-cra");

const DEV_SERVER = "http://localhost:90";

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
  ),
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      proxy: {
        "/app": {
          target: DEV_SERVER,
          changeOrigin: true,
          secure: false,
        },
      },
    };
  }),
};
