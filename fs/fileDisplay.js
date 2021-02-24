/**
 * 1. 引入依赖模块 fs path
 * 2. 处理传入的path 
 */


const fs = require('fs')
const { resolve, join } = require('path')

// __dirname: 总是返回被执行的 js 所在文件夹的绝对路径
// __filename: 总是返回被执行的 js 的绝对路径
// process.cwd(): 总是返回运行 node 命令时所在的文件夹的绝对路径
// ./: 跟 process.cwd() 一样，返回 node 命令时所在的文件夹的绝对路径
const filePath = resolve('./../again/')

function fileDisplay(filePath) {
    const fileArr = fs.readdirSync(filePath,'utf-8')
    for(let item of fileArr) {
        const fileDir = join(filePath, item)
        const stat = fs.statSync(fileDir)

        const isFile = stat.isFile()
        const isDir = stat.isDirectory()

        if (isFile) {
            console.log(fileDir)
        }

        if (isDir) {
            fileDisplay(fileDir)
        }
    }
}

fileDisplay(filePath)