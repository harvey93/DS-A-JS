const merge = (arr1, arr2) => {
    let arr3 = [];
    while (arr1.length !== 0 && arr2.length !== 0) {
        if(arr1[0] <= arr2[0]) {
            arr3.push(arr1.shift());
        } else {
            arr3.push(arr2.shift());
        }
    }

    arr3 = arr3.concat(arr1);
    arr3 = arr3.concat(arr2);

    return arr3;
};

const mergeSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid, arr.length));
    return merge(arr1, arr2);
};

// let arr1 = [1,4,6,7];
// let arr2 = [2,3,8,9,12,14];

// console.log(merge(arr1, arr2));
// mergeSort([5,3,1,6,7,3,2,9,12]);
console.log(mergeSort([5,3,1,6,7,3,2,9,12]));