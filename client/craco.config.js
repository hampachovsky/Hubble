const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@layout-header-background': '#ffffff',
              '@layout-trigger-background': '#ffffff',
              '@layout-trigger-color': 'fade(#000, 85%)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
