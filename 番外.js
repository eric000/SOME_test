// 给定一个升序整型数组[0,1,2,4,5,7,13,15,16],找出其中连续出现的数字区间，输出为["0->1->2","4->5","7","13","15->16"]
function summaryRanges(arr){
  let tailArr = Array(arr.length).fill(0)
  
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] - arr[i-1] == 1) {
      tailArr[i-1]--
    }
    tailArr[i]++
  }
  console.log(tailArr) // [-1, 0, 1, 0, 1, 1, 1, 0, 1]
  return tailArr.reduce((item, cur, index, tArr) => {
    if (tArr[index - 1] < 1) {
      item[item.length - 1] = item[item.length - 1] + '->' + arr[index]
    } else  {
      item.push(arr[index + ''])
    } 
    return item
  }, [])
}