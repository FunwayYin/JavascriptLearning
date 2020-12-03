var arr = [3,5,1,6,8,11,0,1]

/**
 * 冒泡排序
 * @param arr
 */
function bubbleSort(arr) {
    for (var i = arr.length-1;i>0;i--){
        for (var j = 0;j<i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
// console.log(arr);
// bubbleSort(arr);
// console.log(arr);

/**
 * 选择排序
 * @param arr
 */
function selectSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

/**
 * 插入排序
 * @param arr
 */
function insertSort(arr)  {
    for (var i = 1; i < arr.length; i++) {
        var preIndex = i - 1; //上一个索引
        var current = arr[i]; //当前比较值
        // 如果上一个索引大于等于0并且上一个值大于当前值，那么将此二值互换,一直循环比较到最小值
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
            console.log(arr)
        }
        arr[preIndex+1] = current;
        console.log(arr)
    }
}

/**
 *快速排序
 * @param arr
 * @returns {*}
 */
function quickSort(arr) {

    if (arr.length <= 1) return arr;

    var left = [], right = [];
    var num = Math.ceil(arr.length / 2);
    var numValue = arr.splice(num, 1)[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > numValue) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    let newArr = []
    return newArr.concat(quickSort(left),numValue,quickSort(right))
}

let newarr = quickSort(arr);
console.log(newarr);