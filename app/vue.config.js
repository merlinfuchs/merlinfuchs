module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://merlin.gg',
                changeOrigin: true
            }
        }
    }
}