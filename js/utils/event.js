/// //////////////////////////////////////////////////////////////////
///  事件相关功能                                                 ////
/// /////////////////////////////////////////////////////////////////
function getClickInfo(event) {
  if (event === undefined) event = window.event // IE hack
  var target = 'target' in event ? event.target : event.srcElement // another IE hack

  // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/compatMode
  var root = document.compatMode === 'CSS1Compat' ?
    document.documentElement :
    document.body
  var mxy = [event.clientX + root.scrollLeft, event.clientY + root.scrollTop]

  var path = common.getPathToTmp(target)
  var txy = common.getPageXY(target)
  return {
    // 路径
    e: path,
    // 滚动
    pxo: root.scrollLeft,
    pyo: root.scrollTop,
    // 距页面
    cx: mxy[0],
    cy: mxy[1],
    // 元素距页面
    ex: txy[0],
    ey: txy[1],
    // 元素内偏移量
    ot: mxy[0] - txy[0],
    ol: mxy[1] - txy[1],
    // 可视区域
    w: root.clientWidth,
    h: root.clientHeight
  }
},

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript
function xpath2Ele(xpathToExecute) {
  var result = []
  var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null)
  for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
    result.push(nodesSnapshot.snapshotItem(i))
  }
  return result
}

function getPathTo(element) {
  if (element.id !== '') {
    return "//*[@id='" + element.id + "']"
  }

  if (element === document.body) {
    return element.tagName.toLowerCase()
  }

  var ix = 0
  var siblings = element.parentNode.childNodes
  for (var i = 0; i < siblings.length; i++) {
    var sibling = siblings[i]

    if (sibling === element) {
      return common.getPathTo(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix +
        1) + ']'
    }

    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
      ix++
    }
  }
}

function getPathToTmp(element) {
  if (element.id !== '') {
    return '#' + element.id
  }

  if (element === document.body) {
    return element.tagName.toLowerCase()
  }

  var ix = 0
  var siblings = element.parentNode.childNodes
  for (var i = 0; i < siblings.length; i++) {
    var sibling = siblings[i]

    if (sibling === element) {
      return common.getPathToTmp(element.parentNode) + '>' + element.tagName.toLowerCase() + ':nth-child(' + (ix +
        1) + ')'
    }

    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
      ix++
    }
  }
}

function getPageXY(element) {
  var x = 0

  var y = 0
  while (element) {
    x += element.offsetLeft
    y += element.offsetTop
    element = element.offsetParent
  }
  return [x, y]
}

function getScrollInfo() {
  var root = document.compatMode === 'CSS1Compat' ?
    document.documentElement :
    document.body
  return {
    // 窗口滚动offset
    osy: root.scrollTop,
    // 窗口滚动offset + 窗口可视高度
    osyh: root.scrollTop + root.clientHeight,
    // 可视区域
    w: root.clientWidth,
    h: root.clientHeight
  }
}