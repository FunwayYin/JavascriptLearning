/**
 *测试数据类
 */
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = function (element) {
        this.dataStore[this.pos++] = element;
    };
    this.toString = function () {
        var restr = "";
        for ( var i = 0; i < this.dataStore.length; ++i ) {
            restr += this.dataStore[i] + " ";
            if (i > 0 & i % 10 == 0) {
                restr += "\n";
            }
        }
        return restr;
    };
    this.clear = function () {
        for ( var i = 0; i < this.dataStore.length; ++i ) {
            this.dataStore[i] = 0;
        }
    };
    this.setData = function () {
        for ( var i = 0; i < this.numElements; ++i ) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    };
    this.swap = function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
    /**
     * 冒泡排序
     */
    this.bubbleSort =function () {
        var numElements = this.dataStore.length
        for(var outer = numElements;outer>=2;--outer){
            for(var inner = 0;inner<=outer-1;++inner){
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
        }
    };
    /**
     * 冒泡排序比较次数
     */
    this.bubbleSortTimes = function(){
        var numElements = this.dataStore.length
        var times =  ((numElements+1)*numElements)/2-1
        console.log('bubbleSortTimes times:'+ times)
    };
    /**
     * 选择排序
     */
    this.selectSort =function () {
        var min;
        for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
            min = outer;
            for (var inner = outer + 1;
                 inner <= this.dataStore.length-1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
                this.swap(this.dataStore, outer, min);
            }
        }
    }
    for ( var i = 0; i < numElements; ++i ) {
        this.dataStore[i] = i;
    }
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

// myNums.bubbleSort();
// console.log(myNums.toString());
// myNums.bubbleSortTimes();

myNums.selectSort();
console.log(myNums.toString());
