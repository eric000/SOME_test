var myAtoi = function (str) {
  let tmp = ''
  for(let i = 0; i < str.length; i++) {
    if(/[-+]/.test(str[i])) {
      if (tmp.length == 0 && (tmp[0] != '-' || tmp[0] != '+')) {
        tmp += str[i]
      } else {
        break
      }
      
    }
    if(/[0-9]/.test(str[i])) {
      tmp += str[i]
    }
    if (!tmp && /[^-+\s\d]/.test(str[i])) {
      break
    }
  }
  tmp = tmp.length == 1 && /[-+]/.test(tmp) ? 0 : tmp
  let number = tmp.length > 0 ? parseInt(tmp) : 0
  number = number > 2 ** 31 ? 2 ** 31 : number
  number = number < 0 && number < (-2) ** 31 ? (-2)**31 : number
  return number
}