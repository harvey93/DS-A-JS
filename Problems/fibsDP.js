const fibs = num => {
    if(num === 1) {
        return 0;
    }else if (num === 2) {
        return 1;
    }
    return fibs(num - 1) + fibs(num - 2);
};

// console.log(fibs(100));

const fibsMemo = (num, memo) => {

};

console.log(fibsMemo(100));