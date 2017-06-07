const rWI = arr => {
    let res;
    let sum = arr.reduce((acc, el) => acc + el);
    let rand = Math.floor(Math.random() * sum);
    let cumulativeSum = 0;
    for(let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];
        if(cumulativeSum > rand){
            res = i;
            break;
            // return i;
        }

    }
    console.log(rand);
    return res;
};

console.log(rWI([4,6,8]));