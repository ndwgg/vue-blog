module.exports = {
    publicPath: "/ndwgg/dist/",
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
