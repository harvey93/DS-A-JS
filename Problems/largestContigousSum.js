const lCSum = arr => {
    let maxSum = arr[0];
    let currentSum = 0;
    arr.forEach(el => {
        currentSum += el;
        if(currentSum < 0) {
            currentSum = 0;
        }
        if(currentSum > maxSum) {
            maxSum = currentSum;
        }
    });
    return maxSum;
};

console.log(lCSum([5, 3, -7, 6, 4]));