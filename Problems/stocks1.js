const stocks1 = arr => {
    let currentMin = arr[0];
    let maxRange = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < currentMin) {
            currentMin = arr[i];
            continue;
        }
        if(arr[i] - currentMin > maxRange) {
            maxRange = arr[i] - currentMin;
        }
    }
    return maxRange;
};

console.log(stocks1([100, 180, 260, 310, 40, 535, 695]));