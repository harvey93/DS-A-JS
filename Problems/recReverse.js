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
    let first = str[i];
    let last = str[j];
    // str = last + str.slice(i + 1, j) + first;
    str = str.substring(0,i) + last + str.substring(i + 1, j) + first + str.substring(j + 1, str.length);
    // return str;
    return recRevStr(str, i + 1, j - 1);
};

// console.log(recRev("hello".split('')));
console.log(recRevStr("hello"));
console.log(recRevStr("abcdefghijklm"));