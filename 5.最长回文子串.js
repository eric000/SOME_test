/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 1. 暴力解法
// var longestPalindrome = function(s) {
//     let tmpStr = s //.split('').join('*')
//     let rtnStr = ''
//     for(let i = 0; i < tmpStr.length ;i++) {
//       for(let j = i; j < tmpStr.length ; j ++) {
//         let palindromeObj = palindrome(tmpStr, i,j) || {}
//         palindromeObj.flag && palindromeObj.str.length > rtnStr.length && (rtnStr = palindromeObj.str)
//       }
//     }
//     return rtnStr
// };

// function palindrome(str, i, j) {
//   let flag = true
//   ii = i
//   jj = j
//   while(j - i + 1 > 1 && flag) {
//     if (str[i] != str [j]) {
//       flag = false
//     } else {
//       i += 1;
//       j -= 1;
//     }
//   }
//   return {
//     flag,
//     str: str.substring(ii, ++jj)
//   }
// }

// 2. 动态规划

// 字符串切/拼太多了 
// var longestPalindrome = function(s) {
//   let tmpStr = s.split('').join('*')
//   let tmpStrLength = tmpStr.length
//   let tmpMatchStr = ''
//   for(let i = 0; i < tmpStrLength ; i++) {
//     let itemMatchStr = ''
//     let left = i, right = i
//     while(left > -1 && right < tmpStrLength) {
//       if (tmpStr[left] == tmpStr[right]) {
//         left--;
//         right ++;
//       } else {
//         break
//       }
//     }
//     itemMatchStr = tmpStr.substring(left + 1, right).split('*').join('');
//     tmpMatchStr = itemMatchStr.length > tmpMatchStr.length  ? itemMatchStr : tmpMatchStr
//   }
//   return tmpMatchStr
// }

// 优化处理字符串次数
var longestPalindrome = function(s) {
  let start = 0, end = 0
  for(let i = 0; i < s.length ; i++) {
    let length1 = expandAroundCenter(s, i , i)
    let length2 = expandAroundCenter(s, i, i + 1)
    let length = Math.max(length1, length2)
    console.log(length2, length1,end, start)
    if (length > end - start) {
      start = i - ((length -1) >>1)
      end = i + (length >> 1)
    }
  }
  return s.substring(start , end + 1)
}

function expandAroundCenter(str, left, right) {
  while(left > -1 && right < str.length && str[left] == str[right]) {
      left--;
      right ++;
  }
  return right - left - 1
}

// @lc code=end
