const factorialRec = num => {
    if(num === 1){
        return 1;
    }

    return num * factorialRec(num - 1);
};

console.log(factorialRec(5));
