module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.my-site.com/',
                ws: true,
                changeOrigin: true
            },
        }
    },
    configureWebpack: require("./webpack.config"),
}
