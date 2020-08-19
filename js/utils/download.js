import * as fileApi from '@/api/file'

/**
 *
 * a标签下载文件
 * @param {String} id - 文件id
 */
export function linkDownload(id) {
  const link = document.createElement('a')
  const evt = document.createEvent('HTMLEvents')
  evt.initEvent('click', false, false)
  link.href = `${process.env.VUE_APP_BASE_API}/files/download/${id}`
  link.target = '_blank'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  window.URL.revokeObjectURL(link.href)
}

/**
 *
 * 文件模拟表单下载
 * @export
 * @param {String} id
 * @param {string} [method='get']
 */
export function formDownLoad(id, method = 'get') {
  const body = document.getElementsByTagName('body')[0]
  const form = document.createElement('form')
  // form.setAttribute('target', '_blank')
  body.appendChild(form)
  form.action = `${process.env.VUE_APP_BASE_API}/files/download/${id}`

  form.method = method
  let str = ''
  str += `<input type="hidden" name="id" value="${id}">`
  form.innerHTML = str
  form.submit()
  form.parentNode.removeChild(form)
}

/**
 *
 * 二进制下载文件
 * @param {Object} file
 * @param {string} file.name - 文件名.
 * @param {string} file.id - 文件id.
 */
export function blobDownload(file) {
  fileApi.downloadFile(file.id).then(res => {
    const content = res
    const blob = new Blob([content])
    const fileName = file.name
    if ('download' in document.createElement('a')) { // 非IE下载
      const elink = document.createElement('a')
      elink.download = fileName
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href) // 释放URL 对象
      document.body.removeChild(elink)
    } else { // IE10+下载
      navigator.msSaveBlob(blob, fileName)
    }
  })
}
