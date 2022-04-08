const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    //关闭语法提示
    lintOnSave:false,

    // 开启代理服务器(方式一)
        // devServer: {
        //     proxy: 'http://localhost:5000'
        // }

    // 开启代理服务器(方式二)
        devServer: {
            proxy: {
            '/apiStudent': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/apiStudent':''},
                ws: true,//用于支持websocket
                changeOrigin: true//用于请求头中的host值
            },
            '/apiCar': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/apiCar':''},
                ws: true,//用于支持websocket
                changeOrigin: true//用于请求头中的host值
            }
            }
        }
})