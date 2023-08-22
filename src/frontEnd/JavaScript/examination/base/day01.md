---
title: day01  
index: true  
order: 1  
icon: bijiben
category: "js"
---

1、截取字符串abcdace的ace
2、数组的排序方法

```js
// ?t1:截取字符串abcdace的ace
// 1.String.slice
let str = "abcdace"
let subString = 'ace'
let result = ''
let index = 0
index = str.indexOf(subString)
result = str.slice(index)
console.log("🚀 ~ file: day01.js:9 ~ result:", result)
// 2.正则
result = str.match(/ace/g).toString()
console.log("🚀 ~ file: day01.js:12 ~ result:", result)
// 3.String.subString
result = str.substring(index)
console.log("🚀 ~ file: day01.js:15 ~ result:", result)

// ?t2:数组的排序方法
// 数组的排序方法有很多种，最简单的是使用Array的sort方法， 其次是一些常见的排序方法
// 其中冒泡、选择、插入适用于小规模数据，快排、归并适用于大规模数据
// 1.Array.sort
let arr = [5, 1, 7, 8, 4, 2]
result = arr.sort()
console.log("🚀 ~ file: day01.js:23 ~ result:", result)

// 2.冒泡排序 O(n^2)
function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
result = bubbleSort(arr)
console.log("🚀 ~ file: day01.js:44 ~ result:", result)

// 3.选择排序 O(n^2)
function selectionSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

result = selectionSort(arr)
console.log("🚀 ~ file: day01.js:69 ~ result:", result)
// 4.快速排序 O(n log n)
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)]
    let less = []
    let greater = []
    let equal = []
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else if (arr[i] > pivot) {
            greater.push(arr[i])
        } else {
            equal.push(arr[i])
        }
    }
    return quickSort(less).concat(equal, quickSort(greater))
}

result = quickSort(arr)
console.log("🚀 ~ file: day01.js:92 ~ result:", result)
// 4.插入排序 O(n^2)

function insertionSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

result = insertionSort(arr)
console.log("🚀 ~ file: day01.js:113 ~ result:", result)

```


```sh
🚀 ~ file: day01.js:9 ~ result: ace
🚀 ~ file: day01.js:12 ~ result: ace
🚀 ~ file: day01.js:15 ~ result: ace
🚀 ~ file: day01.js:23 ~ result: [ 1, 2, 4, 5, 7, 8 ] 
🚀 ~ file: day01.js:44 ~ result: [ 1, 2, 4, 5, 7, 8 ] 
🚀 ~ file: day01.js:69 ~ result: [ 1, 2, 4, 5, 7, 8 ] 
🚀 ~ file: day01.js:92 ~ result: [ 1, 2, 4, 5, 7, 8 ] 
🚀 ~ file: day01.js:113 ~ result: [ 1, 2, 4, 5, 7, 8 ]
```








