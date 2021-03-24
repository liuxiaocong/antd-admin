const CracoLessPlugin = require("craco-less");
module.exports = {
  // ...
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#6d4cc2" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
