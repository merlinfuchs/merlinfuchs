module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://dev.merlin.gg',
                changeOrigin: true
            }
        }
    }
}