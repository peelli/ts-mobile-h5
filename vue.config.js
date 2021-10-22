const THEME_CONFIG = require('./src/plugins/vant-theme-config')

module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: THEME_CONFIG
            }
        }
    }
}
