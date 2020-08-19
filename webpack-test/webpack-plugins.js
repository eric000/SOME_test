class PluginTest {
  constructor(option) {
    this.option = option
  }
  apply (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      let str = ''
      for (let filename in compilation.assets) {
        str += `文件名${filename} 大小${compilation.assets[filename].size()} \n` 
      }
      compilation.assets['fileSize.md'] = {
        source() {
          return str
        },
        size() {
          return str.length
        }
      }
      callback()
    })
  }
}

module.exports = PluginTest