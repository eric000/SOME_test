const fs = require('fs')
const path = require('path')
const utils = require('util')

const filePath = path.resolve(__dirname, './data.txt')
const fileCode = 'utf-8'

console.log(filePath, fileCode)

fs.readFile(filePath, fileCode, function (err, content) {
    if (err) return
    console.log('fs.readFile: ' + content)
})

const contentSync =  fs.readFileSync(filePath, fileCode)
console.log('fs.readFileSync: ', contentSync)

const readFileAsync = utils.promisify(fs.readFile)
readFileAsync(filePath, fileCode).then(content => {
    console.log('util promisify: ' + content)
})


function promisify (func) {
    return function(...args) {
        return new Promise((resole, reject) => {
            let argsWithCallback = [...args, function(err, res) {
                if (err) reject(err)
                resole(res)
            }]
            func.apply(func, argsWithCallback)
        })
    }
}

const readFileAsync2 = promisify(fs.readFile)
readFileAsync2(filePath, fileCode).then(content => {
    console.log('my promisify: ' + content)
})