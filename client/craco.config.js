const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@layout-header-background': '#1e1f26',
                            '@layout-trigger-background': '#1e1f26',
                            '@menu-bg': '#1e1f26',
                            '@cascader-menu-bg': '#1e1f26',
                            '@menu-inline-submenu-bg': '#1e1f26',
                            '@menu-highlight-color': '#4d648d',
                            '@menu-item-color': '#d0e1f9',
                            '@layout-trigger-color': 'fade(#000, 85%)',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
