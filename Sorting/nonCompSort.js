const sort1 = arr => {
    let res = [];
    for(let i = 1; i <= arr.length; i++) {
        res.push(i);
    }
    return res;
};

const sort2 = arr => {
    let counts = [];
    let res = [];
    for(let i = 0; i <= arr.length; i++) {
        counts.push(0);
    }
    arr.forEach(el => {
        counts[el]++;
    });
    counts.forEach((val, idx) => {
        for(let i = 0; i < val; i++) {
            res.push(idx);
        }
    });
    return res;
};

const sort3 = arr => {
    
};

console.log(sort2([1,3,2,2,3,5]));