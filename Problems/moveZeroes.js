const moveZeroes = arr => {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        while(i > 0) {
            i++;
        }
        while(j > 0) {
            j--;
        }
        exch(arr, i, j);
    }
    return arr;
};

const exch = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

console.log(moveZeroes([1, 2, 0, 3, 4, 0, 5, 6, 0]));