const quickSort = (arr, lo, hi) => {
    if (hi <= lo) {return;}
    let j = partition(arr, lo, hi);
    // return j;
    quickSort(arr, lo, j - 1);
    quickSort(arr, j + 1, hi);
    return arr;
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

let array = [6, 15 ,1, 2,2, 1, -5, 9, 0, 12, 4, 121];


console.log(quickSort(array, 0, array.length - 1));
// console.log(exch([1,2,3,4], 0, 3));


    