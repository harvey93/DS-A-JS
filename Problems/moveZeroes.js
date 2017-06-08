const moveZeroes = arr => {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        while(arr[i] > 0) {
            i++;
        }
        while(arr[j] === 0) {
            j--;
        }
        if(i >= j) {
            break;
        }
        exch(arr, i, j);
        // console.log(arr);
    }
    return arr;
};

const exch = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// let arr = [1, 2, 0, 3, 4, 0, 5, 6, 0];
// exch(arr,2,7);
// console.log(arr);
console.log(moveZeroes([1, 2, 0, 3, 4, 0, 5, 6, 0]));