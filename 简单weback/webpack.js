const fs = require('fs');
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')


function setpOne (filename) {
    console.log(filename)
    // 读取文件
    const content = fs.readFileSync(filename, 'utf-8')
    const ast = parser.parse(content, {
        sourceType: 'module' // 为识别es module
    })

    const dependencies = {}

    // 遍历AST抽象语法树
    traverse(ast, {
        // 处理import引入模块
        ImportDeclaration({node}) {
            const dirname = path.dirname(filename)
            const sourceName = node.source.value
            const newFile = './' + path.join(dirname, sourceName)
            dependencies[sourceName] = newFile
        }
    })

    // 通过@babel core和 preset-env 进行代码转换
    const {code} = babel.transformFromAst(ast, null, {
        presets : ["@babel/preset-env"]
    })

    return {
        filename, // 文件名
        dependencies, // 文件依赖
        code // 转换后的代码
    }
}

function stepTwo(entry) {
    const entryModule = setpOne(entry)

    const graphArray = [entryModule]

    for(let i = 0; i< graphArray.length; i++) {
        const item = graphArray[i]
        const {dependencies} = item
        for(let dep in dependencies) {
            graphArray.push(setpOne(dependencies[dep]))
        }
    }
    // 图谱
    const graph = {}
    graphArray.forEach(item => {
        const {filename, dependencies, code} = item
        graph[filename] = {
            dependencies,
            code
        }
    })

    return graph
}

console.log(stepTwo('./index.js'))

function stepThree(entry) {
    const graph = JSON.stringify(stepTwo(entry))
    return `
    (function(graph) {
        //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
        function require(module) {
            //localRequire的本质是拿到依赖包的exports变量
            function localRequire(relativePath) {
                return require(graph[module].dependencies[relativePath]);
            }
            var exports = {};
            (function(require, exports, code) {
                eval(code);
            })(localRequire, exports, graph[module].code);
            return exports;//函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁
        }
        require('${entry}')
    })(${graph})`
}

const code = stepThree('./index.js')
console.log(code)