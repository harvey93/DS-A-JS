const fibs = num => {
    if(num === 0) {
        return [];
    }
    if(num === 1) {
        return [0];
    }
    let res = [0,1];
    while(res.length < num) {
        res.push(res[res.length - 1] + res[res.length - 2]);
    }
    return res;
};

console.log(fibs(5));