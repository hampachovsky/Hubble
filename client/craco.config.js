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
                            '@menu-highlight-color': '#ffffff',
                            '@menu-item-color': '#ffffff',
                            '@layout-trigger-color': 'fade(#000, 85%)',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
