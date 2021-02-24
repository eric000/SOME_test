const utils = {
    getValue(expr, vm) {
        return vm.$data[expr.trim()]
    },
    setValue(expr, vm, newValue) {
        vm.$data[expr] = newValue
    },
    model(node, value, vm) {
        const initValue = this.getValue(value, vm)
        new Watcher(value, vm, (newValue) => {
            this.modelUpdater(node, newValue)
        })
        node.addEventListener('input', (e) => {
            const newValue = e.target.value
            this.setValue(value, vm, newValue)
        })

        this.modelUpdater(node, initValue)
    },
    text(node, value, vm) {
        let result
        if (value.includes('{{')) {
            // {{ xxx }}
            result = value.replace(/\{\{(.+)\}\}/g, (...args) => {
                const expr = args[1]
                new Watcher(expr, vm, (newValue) => {
                    this.textUpdatar(node, newValue)
                })
                return this.getValue(args[1], vm)
            })
        } else {
            // v-text="xxx"
            result = this.getValue(value, vm)
        }
        this.textUpdatar(node, result)
    },
    on(node, value, vm, eventName) {
        const fn = vm.$options.methods[value]
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    textUpdatar(node, value) {
        node.textContent = value
    },
    modelUpdater(node, value) {
        node.value = value
    }
}

class Watcher {
    constructor(expr, vm, cb) {
        this.expr = expr
        this.vm = vm
        this.cb = cb
        this.oldValue = this.getOldValue()
    }
    getOldValue() {
        Dep.target = this
        const oldValue = utils.getValue(this.expr, this.vm)
        Dep.target = null

        return oldValue
    }

    updata() {
        const newValue = utils.getValue(this.expr, this.vm)
        if (newValue !== this.oldValue) {
            this.cb(newValue)
        }
    }
}

class Dep {
    constructor() {
        this.collect = []
    }

    addWatcher(watcher) {
        this.collect.push(watcher)
    }

    notify() {
        this.collect.forEach(w => w.updata())
    }
}

class Compiler {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm

        const fragment = this.compilerFragment(this.el)

        this.compile(fragment)
        this.el.appendChild(fragment)
    }

    compilerFragment(el) {
        const f = document.createDocumentFragment()
        let firstChild
        while (firstChild = el.firstChild) {
            f.appendChild(firstChild)
        }
        return f
    }

    compile(fragment) {
        const childNodes = Array.from(fragment.childNodes)
        childNodes.forEach(node => {
            if (this.isElementNode(node)) {
                // 标签节点 h1 / input ， 读取属性，查看是否有 v- 开头的内容
                this.compileElement(node)
            }
            if (this.isTextNode(node)) {
                // 内容文本节点 {{ msg }} 是否有双括号语法
                this.compileText(node)
            }

            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }

    compileElement(node) {
        const attributes = Array.from(node.attributes)
        attributes.forEach(attr => {
            const { name, value } = attr
            if (this.isDirector(name)) {
                // 指令 v-model ， v-text, v-bind, v-on:click
                const [, directive] = name.split('-')
                const [compileKey, eventName] = directive.split(':')
                utils[compileKey](node, value, this.vm, eventName)
            } else if (this.isEventName(name)) {
                // @
                const [, eventName] = name.split('@')
                utils['on'](node, value,this.vm, eventName)
            }
        })
    }

    compileText(node) {
        const content = node.textContent
        const reg = /\{\{(.+)\}\}/

        if (reg.test(content)) {
            utils['text'](node, content, this.vm)
        }
    }
    isEventName(name) {
        return name.startsWith('@')
    }
    isDirector(name) {
        return name.startsWith('v-')
    }
    isElementNode(el) {
        return el.nodeType === 1
    }
    isTextNode(el) {
        return el.nodeType === 3
    }
}
class Observe {
    constructor(data) {
        this.observe(data)
    }

    observe(data) {
        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key]);
            })
        }
    }

    defineReactive(obj, key, value) {
        this.observe(value)
        const dep = new Dep()
        Object.defineProperty(obj, key, {
            get() {
                const target = Dep.target
                target && dep.addWatcher(target)
                return value
            },
            set: (newVal) => {
                if (value === newVal) return
                this.observe(newVal)
                value = newVal

                dep.notify()
            }
        })
    }
}

class Vue {
    constructor(options) {
        const { el, data } = options
        this.$el = el
        this.$data = data
        this.$options = options

        this._init()
    }

    _init() {
        // 触发 this.$data 和模版的绑定
        new Observe(this.$data)
        // 触发模版部分。将模版中的 data 部分的变量和模版绑定起来
        new Compiler(this.$el, this)

        this.proxyData(this.$data)
    }

    proxyData(data) {
        /**
         * 1. 通过this.xx 更改 this.$data.xx 的结果
         */
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key]
                },
                set(newVal) {
                    data[key] = newVal
                }
            })
        })
    }
}