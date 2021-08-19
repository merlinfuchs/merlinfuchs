module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://merlin.gg',
                changeOrigin: true
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
