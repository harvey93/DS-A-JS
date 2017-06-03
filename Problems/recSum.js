const recSum = arr => {
    if(arr.length === 1) {
        return arr[0];
    }
    let first = arr[0];
    return first + recSum(arr.slice(1));
};

console.log(recSum([1,3,5,6]));