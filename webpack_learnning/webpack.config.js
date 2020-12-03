/**
 * create by  on 2018/10/11
 */
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');

new htmlPlugin({
    minify:{
        removeAttributeQuotes:true
    },
    hash:true,
    template:'./src/index.html'
});

module.exports={
    devtool:'eval-source-map',
    //入口文件的配置项
    entry:{
        js:'./src/js/index.js',
        css:'./src/css/index.css'
    },
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'./dist'),
        //输出的文件名称
        filename:'[name].js'
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000
                    }
                }]
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
        new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./page/index.html'
        })
    ],
    //配置webpack开发服务功能
    devServer:{
        contentBase:path.resolve(__dirname,''),
        host:'127.0.0.1',
        compress:true,
        port:8686
    },
    use:{
        loader:'babel-loader',
        options:{
            presets:[
                "es2015","react"
            ]
        }
    },
    exclude:/node_modules/
}
