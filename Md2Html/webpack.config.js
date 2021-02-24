const {resolve} = require('path')
const Md2HtmlPLugin = require('./plugins/md-to-html')

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/app.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    plugins:[
        new Md2HtmlPLugin({
            template: resolve(__dirname, 'test.md'),
            filename: 'test.html'
        })
    ]

}