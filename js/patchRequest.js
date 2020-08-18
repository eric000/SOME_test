// 请实现以下的函数，可以批量请求数据，所有的URL地址在urls参数中，
// 同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，
// 需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
function sendRequest(urls: sring[], max: number, callback: () => void) {
  //TODO
  let index = 0;
  let total = 0;
  let length = urls.length
  function request() {
    while (max > 0 && index < length) {
      max--
      fetch(urls[index++]).finally(() => {
        max++
        total++
        if (total === length) {
          callback && callback()
        } else {
          request()
        }
      })
    }

  }
  request()
}