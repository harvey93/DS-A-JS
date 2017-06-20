// nlogn
const median = arr => {
    let mid = Math.floor(arr.length/ 2);
    if(arr.length % 2 === 0 ) {
        return (arr.sort()[mid] + arr.sort()[mid - 1]) / 2;
    } else {
        return arr.sort()[mid];
    }
};

// quickselect

const quickMedian = arr => {
    let mid = Math.floor(arr.length/ 2);
    // console.log(arr.length % 2);
    if(arr.length % 2 === 0 ) {
        // return (quickSelect(arr, mid) + quickSelect(arr, mid - 1)) / 2;
        return (quickSelect(arr, mid) + quickSelect(arr, mid - 1)) / 2;
    } else {
        return quickSelect(arr, mid);
    }
};

const quickSelect = (arr, k) => {
    shuffle(arr);
    let lo = 0;
    let hi = arr.length - 1;
    while(hi > lo) {
        let j = partition(arr, lo, hi);
        if(j < k) {
            lo = j + 1;
        } else if(j > k){
            hi = j - 1;
        } else {
            return arr[k];
        }
    }
    // console.log(arr);
    return arr[k];
};

const partition = (arr, lo, hi) => {
    let i = lo;
    let j = hi + 1;
    while (true) {
        while(less(arr[++i], arr[lo])){
            if(i === hi) { break; }
        }

        while(less(arr[lo], arr[--j])){
            if(j === lo) { break ;}
        }

        if(i >= j) { break; }
        exch(arr, i, j);
    }
    exch(arr, lo, j);
    // return arr;
    return j;
};

const less = (val1, val2) => {
    return val1 < val2;
};

const exch = (arr, i, j ) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
};

const shuffle = arr => {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};

// let arr = [1,2,3,4,5,6,7,123,12,13,14,125];
let arr = [33,21,343,12,34,44,0,78];
// shuffle(arr);
// console.log(arr);


console.log(quickMedian(arr));
// console.log(quickMedian([1,2,3,4]));
console.log(median(arr));