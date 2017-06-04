const fibs = (n) => {
    if(n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibs(n - 1) + fibs(n - 2);
};

const fibsMemo = (n, map = new Map()) => {
    if(n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if(map.has(n)){
        return map.get(n);
    }
    map.set(n, fibsMemo(n - 1, map) + fibsMemo(n - 2, map));
    return fibsMemo(n - 1, map) + fibsMemo(n - 2, map);
};

const fibsTab = (n) => {

};

console.log(fibs(9));
console.log(fibsMemo(9));
console.log(fibsTab(9));