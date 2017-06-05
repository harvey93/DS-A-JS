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

const fibsRec = num => {
    if(num === 0) {
        return [];
    }
    if(num === 1) {
        return [0];
    }
    if(num === 2) {
        return [0,1];
    }
    let prevFibs = fibsRec(num - 1);
    let newFib = prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2];
    prevFibs.push(newFib);
    return prevFibs;
};

// console.log(fibs(200));
// console.log(fibsRec(200));