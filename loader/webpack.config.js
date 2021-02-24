/** 
 * 
 * mode development/production
 * entry 入口
 * output path filename 打包输出路径
 * devtool source-map
 * module rules loader
 * plugins 插件
 * devServer 开发服务器
 * 
*/

const {resolve} = require('path')
const HtmlWebpackPulgin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/app.js'),
    output:{
        path: resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tpl$/,
                use: [
                    'babel-loader',
                    {
                        loader: './loaders/tpl-loader',
                        options: {
                            log: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPulgin({
            template: resolve(__dirname, 'index.html')
        })
    ],
    devServer: {
        port: 3333
    }
}