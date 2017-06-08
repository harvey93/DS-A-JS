const slowSums = arr => {
    let sorted = arr.sort();
    let res;
    for(let i = 0; i < arr.length; i++){
        if(sorted[i] !== i){
            res = i;
            break;
        }
    }
    return res;
};

const fastSums = arr => {
    let sum = 0;
    for(let i = 0; i <= arr.length; i++) {
        sum += i;
    }
    arr.forEach(el => {
        sum -= el;
    });
    return sum;
};

// console.log(slowSums([0,5,6,3,7,1,8,2]));
console.log(fastSums([0,5,6,3,7,1,8,2]));