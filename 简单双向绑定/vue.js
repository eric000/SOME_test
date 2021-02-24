const reg_val = /\{\{(.+?)\}\}/
class Vue {
    constructor(el, data) {
        this._el = document.querySelector(el)
        this._data = data
        this._domPool = {}
        this._init()
    }

    _init() {
        this._initDom()
        this._initData()

    }

    _initData() {
        let _this = this
        this.data = new Proxy(this._data, {
            get(target, key) {
                return Reflect.get(target, key)
            },
            set(target, key, val) {
                _this._domPool[key].innerHTML = val
                return Reflect.set(target, key, val)
            }
        })
    }
    _initDom() {
        this._bindDom(this._el)
        this._bindInput()
        console.log(this._domPool)
    }

    _bindDom(el) {
        const childNodes = el.childNodes
        childNodes.forEach(item => {
            if (item.nodeType === 3) {
                const value = item.nodeValue
                if (value.trim().length) {
                    const isValid = reg_val.test(value)
                    if (isValid) {
                        const key = value.match(reg_val)[1].trim()
                        this._domPool[key] = item.parentNode
                        item.parentNode.innerText = this._data[key] || undefined
                    }
                }

            }
            item.childNodes && this._bindDom(item)
        });
    }

    _bindInput() {
        const allInput = document.querySelectorAll('input')
        allInput.forEach(item => {
            const _vModel = item.getAttribute('v-model')
            if (_vModel) {
                item.addEventListener('keyup', this._onInput.bind(this, _vModel, item))
            }
        })
    }

    _onInput(key, input) {
        const _value = input.value
        this.data[key] = _value
    }

    setData(key, val) {
        this.data[key] = val
    }
}