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
    let map = new Map();
    map.set(0,0);
    map.set(1, 1);
    for(let i = 2; i <= n; i++) {
        let val1 = map.get(i - 1);
        let val2 = map.get(i - 2);
        map.set(i, val1 + val2);
    }
    return map.get(n);
};

// console.log(fibs(50));
console.log(fibsMemo(100));
// console.log(fibsTab(100));