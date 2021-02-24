const REG_MARK = /^(.+?)\s/
const REG_SHARP = /^\#/
const REG_CROSSBAR = /^\-/
const REG_NUMBER= /^\d/

const {randomNum} = require('./util')

function creatTree(arr) {
    const _htmlPool = {}
    let _lastMatch = ''
    let _key = 0

    arr.forEach(frag => {
        const matched = frag.match(REG_MARK)
        if (matched) {
            const mark = matched[1]
            const input = matched['input']
            if (REG_SHARP.test(mark)) {
                const tag = `h${mark.length}`
                const tagContent = input.replace(REG_MARK, '')
                if (_lastMatch == mark) {
                    _htmlPool[`${tag}-${_key}`].tags = [..._htmlPool[`${tag}-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`]
                } else {
                    _lastMatch = mark
                    _key = randomNum()
                    _htmlPool[`${tag}-${_key}`] = {
                        type: 'single',
                        tags: [`<${tag}>${tagContent}</${tag}>`]
                    }
                }
            }

            if (REG_CROSSBAR.test(mark)) {
                const tagContent = input.replace(REG_MARK, '')
                const tag = 'li'
                if (REG_CROSSBAR.test(_lastMatch)) {
                    _htmlPool[`ul-${_key}`].tags = [..._htmlPool[`ul-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`]
                } else {
                    _lastMatch = mark
                    _key = randomNum()
                    _htmlPool[`ul-${_key}`] = {
                        type: 'wrap',
                        tags: [`<${tag}>${tagContent}</${tag}>`]
                    }
                }
            }

            if (REG_NUMBER.test(mark)) {
                const tagContent = input.replace(REG_MARK, '')
                const tag = 'li'
                if (REG_NUMBER.test(_lastMatch)) {
                    _htmlPool[`ol-${_key}`].tags = [..._htmlPool[`ol-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`]
                } else {
                    _lastMatch = mark
                    _key = randomNum()
                    _htmlPool[`ol-${_key}`] = {
                        type: 'wrap',
                        tags: [`<${tag}>${tagContent}</${tag}>`]
                    }
                }
            }
        }
    });
    
    return _htmlPool
}

function compilerHTML (mdArr) {
    const _htmlPool = creatTree(mdArr)
    let _html = ''
    Object.keys(_htmlPool).forEach(key => {
        const obj = _htmlPool[key]

        if (obj.type == 'single') {
            _html += obj.tags
        } else if (obj.type === 'wrap') {
            let list = ''
            const tag = key.split('-')[0]
            list += `<${tag}>`
            obj.tags.forEach(item => {
                list+=item
            })
            list += `</${tag}>`
            _html += list
        }
    })
    return _html
}

module.exports = {
    compilerHTML
}