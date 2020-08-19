/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if (time === null) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      time = time.replace(/-/g, '/')
    }
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return timeStr
}

// 获取最近7天日期
// getDay(0);//当天日期
// getDay(-7);//7天前日期

// 获取最近3天日期
// getDay(0);//当天日期
// getDay(-3);//3天前日期

export function getFromDay(date, day) {
  var today = date

  var targetdayMilliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day

  today.setTime(targetdayMilliseconds) // 注意，这行是关键代码

  var tYear = today.getFullYear()
  var tMonth = today.getMonth()
  var tDate = today.getDate()
  tMonth = doHandleMonth(tMonth + 1)
  tDate = doHandleMonth(tDate)
  return tYear + '-' + tMonth + '-' + tDate
}

export function getMonth(month) {
  var time = new Date()
  time.setMonth(time.getMonth() + month) // 加月
  time.setDate(1)
  return parseTime(new Date(time), '{y}-{m}-{d}')
}

export function getMonthLast(month, time = new Date()) {
  time.setMonth(time.getMonth() + month + 1) // 加月
  time.setDate(1)
  time.setDate(time.getDate() - 1)
  console.log(time.getDate())
  return parseTime(new Date(time), '{y}-{m}-{d}')
}

export function getDay(day) {
  var today = new Date()

  var targetdayMilliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day

  today.setTime(targetdayMilliseconds) // 注意，这行是关键代码

  var tYear = today.getFullYear()
  var tMonth = today.getMonth()
  var tDate = today.getDate()
  tMonth = doHandleMonth(tMonth + 1)
  tDate = doHandleMonth(tDate)
  return tYear + '-' + tMonth + '-' + tDate
}
function doHandleMonth(month) {
  var m = month
  if (month.toString().length === 1) {
    m = '0' + month
  }
  return m
}

export function getProWeekList(date = new Date()) {
  var dateTime = date.getTime() // 获取现在的时间
  var dateDay = date.getDay()
  var oneDayTime = 24 * 60 * 60 * 1000
  var proWeekList = []

  for (var i = 0; i < 7; i++) {
    var time = dateTime - (dateDay + (7 - 1 - i)) * oneDayTime
    proWeekList[i] = parseTime(new Date(time), '{y}-{m}-{d}') // date格式转换为yyyy-mm-dd格式的字符串
  }
  return proWeekList
}

export function getLastMonthAndDay() {
  var nowDate = new Date()
  var year = nowDate.getFullYear()
  var month = nowDate.getMonth()
  if (month === 0) {
    month = 12
    year = year - 1
  }
  const lastDay = new Date(year, month, 0)
  const yyyyMMddStart = year + '-' + month + '-01'
  const yyyyMMddEnd = year + '-' + month + '-' + lastDay.getDate()
  return [yyyyMMddStart, yyyyMMddEnd]
}

export const disabledDate = (time) => {
  const now = new Date()
  // 时分秒归零
  now.setHours(0)
  now.setMinutes(0)
  now.setSeconds(0)

  return time.getTime() > now.getTime() - 8.64e7
}
