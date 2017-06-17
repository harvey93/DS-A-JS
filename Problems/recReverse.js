const recRev = (arr, i = 0, j = arr.length - 1) => {
    if (i === j) {
        return arr;
    }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return recRev(arr, i + 1, j - 1);
};

const recRevStr = (str, i = 0, j = str.length - 1) => {
    if (i === j) {
        return str;
    }
    let temp = str[0];
    return temp;
    // return recRevStr(str, i + 1, j - 1);
};

// console.log(recRev("hello".split('')));
console.log(recRevStr("hello"));