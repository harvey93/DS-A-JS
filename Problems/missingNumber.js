const missingNumber = (arr, arr2) => {
    let total1 = arr.reduce((acc, el) => acc + el);
    let total2 = arr2.reduce((acc, el) => acc + el);
    return total1 - total2;
};

console.log(missingNumber([1,2,3,4,5],[5,3,1,2]));