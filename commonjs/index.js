// const moduleA = require('./moduleA')

// console.log(moduleA)

const vm = require('vm')
const path = require('path')
const fs = require('fs')

function customRequire(filePath) {
    const pathToTile = path.resolve(__dirname, filePath)
    const content = fs.readFileSync(pathToTile, 'utf-8')

    const wrapper = [
        "(function(require, module, exports) {",
        "})"
    ]

    const wrappedContent = wrapper[0] + content + wrapper[1]

    const script = new vm.Script(wrappedContent, {
        filename: 'index.js'
    })
    const func = script.runInThisContext()

    const module = {
        exports: {}
    }
    func(customRequire, module, module.exports)

    return module.exports
}

const content = customRequire('./moduleA.js')

console.log(content)

