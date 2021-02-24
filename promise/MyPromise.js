// https://promisesaplus.com/
const PENDING = 'PENDING'
const REJECTED = 'REJECTED'
const FULFILLED = 'FULFILLED'
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('same promise'))
    }

    let called = false

    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
        try {
            let then = x.then

            if (typeof then === 'function') {
                then.call(x, (y) => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, (r) => {
                    if (called) return
                    called = true
                    reject(r)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }

    } else {

        resolve(x)
    }
}

class MyPromise {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined

        this.onFulfilledCb = []
        this.onRejectedCb = []

        const resolve = (val) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = val
                this.onFulfilledCb.forEach(cb => {
                    cb(this.value)
                })
            }
        }

        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCb.forEach(cb => {
                    cb(this.reason)
                })
            }
        }

        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        let promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        console.log('let x = onFulfilled', this.value)
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            }

            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }

            if (this.status === PENDING) {
                this.onFulfilledCb.push(() => {

                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })

                this.onRejectedCb.push(() => {

                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
        })

        return promise2
    }
    catch (errorCallback) {
        return this.then(null, errorCallback)
    }
}

// 成功条件
// then return 普通的JavaScript value
// then return 新的的promise承台的结果 value

// 失败条件
// then return 新的promise 失败态的原因 reason
// then 抛出了异常 throe new Error

// promise 链式调用
// 例如JavaScript jQuery return this
// then 不具备this
// return new Promise

module.exports = {
    MyPromise
}
