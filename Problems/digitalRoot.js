const digitalRoot = (num) => {
    if(num < 10) {
        return num;
    }
    let newNum = (num % 10) + Math.floor((num / 10));
    return digitalRoot(newNum);
};

const modDigitalRoot = num => {
    if(num < 10) {
        return num;
    }
    return (1 + ((num - 1) % 9));
    // return num % 9;
};

console.log(digitalRoot(18));

console.log(modDigitalRoot(17));


