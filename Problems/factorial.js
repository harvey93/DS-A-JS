const factorialRec = num => {
    if(num === 1){
        return 1;
    }

    return num * factorialRec(num - 1);
};

// console.log(factorialRec(4));

const factorialIter = num => {
    let total = 1;
    while( num > 1) {
        total *= num;
        num--;
    }
    return total;
};



// const factorialTail = (num, prod = 1) => {

// };

// console.log(factorialMemo(5));
// console.log(factorialRec(100));