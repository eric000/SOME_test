import axios from 'axios'
import { checkStatus } from '@/utils/httpStatus'
import { Message } from 'element-ui'


const service = axios.create({
  // url前缀
  baseURL: process.env.VUE_APP_REQUEST,
  // 跨域发送cookie
  withCredentials: true,
  crossdomain: true,
  // 超时
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   // 让每个请求携带token
    //   // console.log(store.getters.token, getToken())
    //   config.headers.JSESSIONID = getToken()
    // }

    // 运营商安全扫描问题
    if (['DELETE', 'PUT'].some(v => v === config.method.toUpperCase())) {
      config.url += (config.url.indexOf('?') !== -1 ? '&method=' : '?_method=') + config.method
      config.method = 'POST'
    }
    if (['GET'].some(v => v === config.method.toUpperCase())) {
      config.url += (config.url.indexOf('?') !== -1 ? '&timestamp=' : '?timestamp=') + Date.now()
    }

    return config
  },
  error => {
    // 请求出错
    // 答应错误信息
    console.log(error, 'request interceptors error')
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(function (response) {
  const res = response.data
  const fileType = ['application/force-download', 'application/octet-stream', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/json']
  if (res.code === 200 || fileType.includes(res.type)) {
    return res
  } else {
    Message({
      message: res.msg,
      type: 'error'
    })
    return Promise.reject(res)
  }
}, function (error) {
  console.dir('interceptors err' + error) // for debug
  if (!error.response) {
    return Promise.reject(error)
  }
  let msg = error.message
  error.response && (msg = checkStatus(error.response).msg)
  Message({
    message: msg,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
