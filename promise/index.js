const { MyPromise } = require('./MyPromise.js')
console.log('promise')

let promise = new MyPromise((resolve, reject) => { // excu
    // resolve('resolve')

    // reject('reject')
    setTimeout(() => {
        resolve('settimeout')
        // reject('settimeout')
    }, 0)

    // throw new Error('err')
})

promise.then((val) => {
    console.log('fulfilled:', val)
    return new MyPromise((resolve, reject) =>{
        setTimeout(() => {
            resolve('settimeout..')
        }, 1000)
    })
}, (err) => {
    console.log('rejected:', err)
}).then((res) => {
    console.log(res)
})

promise.then((val) => {
    console.log('fulfilled2:', val)
}, (err) => {
    console.log('rejected2:', err)
})