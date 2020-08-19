import { Message } from 'element-ui'
function adBlockTips() {
  const img = document.createElement('img')
  img.className = 'ad-by-google-60x60'
  img.src = 'ad.gif'
  img.style.height = '0'
  img.style.width = '0'
  img.style.display = 'block'
  document.body.appendChild(img)
  setTimeout(() => {
    const $ad = document.getElementsByClassName('ad-by-google-60x60')[0]
    const adStatus = window.getComputedStyle($ad, null).getPropertyValue('display')
    if (adStatus === 'none') {
      Message.error('系统可能会被广告插件误伤！')
    }
  }, 500)
}
adBlockTips()
