const testArr = [5, 8, 2, 6, 20, 11, 0, 1, 4]
// 冒泡排序
function Bubble (arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log(arr, '冒泡排序')
}

// 选择排序
function Select (arr) {
  let len = arr.length
  let minIndex = 0
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  console.log(arr, '选择排序')
}

// 插入排序
function InsertSort (arr) {
  let len = arr.length
  let preIndex
  let current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  console.log(arr, '插入排序')
}

// 希尔排序

// 归并排序// 归并排序
function MergeSort (arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return Merge(MergeSort(left), MergeSort(right))
}
function Merge (left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

// 快速排序
function quickSort (arr, left, right) {
  let len = arr.length
  let partitionIndex
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1
  if (left < right) {
    partitionIndex = partition2(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition (arr, left, right) {
  let pivot = left
  let index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
      index++
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]]
  return index - 1
}
function partition2(arr, left, right) {
  let pivot = left;
  let _arr = arr[left];
  for (let j = left + 1; j <= right; j++) {
    if (arr[j] < _arr) {
      swap(arr, pivot + 1, j)
      pivot++
    }
  }
  swap(arr, left, pivot)
  return pivot
}
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp;
}
// Bubble(testArr)
// Select(testArr)
// InsertSort(testArr)
// console.log(MergeSort(testArr))
console.log(quickSort(testArr))
