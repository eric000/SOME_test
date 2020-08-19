// 返回媒体文件(视频)的时长、尺寸、文件类型
export function getMediaMetaData(file) {
  return new Promise(resolve => {
    const url = URL.createObjectURL(file)
    const video = document.createElement('video')
    video.addEventListener('loadedmetadata', e => {
      URL.revokeObjectURL(url)
      const data = {
        fileFormat: file.type,
        duration: video.duration,
        height: video.videoHeight,
        width: video.videoWidth,
        size: file.size
      }
      resolve(data)
    })
    video.src = url
    // 不做文件类型校验（校验不出来，随便找个文件改个后缀就玩球了），确保读取不到数据时有promise返回
    setTimeout(_ => {
      resolve({
        fileFormat: file.type,
        duration: undefined,
        height: undefined,
        width: undefined,
        size: file.size
      })
    }, 200)
  })
}

// 返回图片文件的尺寸、文件类型
export function getPicMetaData(pic) {
  return new Promise(resolve => {
    const url = URL.createObjectURL(pic)
    const img = new Image()
    const nameArr = pic.name.split('.')
    img.addEventListener('load', e => {
      URL.revokeObjectURL(url)
      const data = {
        fileFormat: nameArr[nameArr.length - 1],
        height: img.height,
        width: img.width,
        size: pic.size
      }
      resolve(data)
    })
    img.src = url

    setTimeout(_ => {
      resolve({
        fileFormat: nameArr[nameArr.length - 1],
        height: undefined,
        width: undefined,
        size: undefined
      })
    }, 200)
  })
}
