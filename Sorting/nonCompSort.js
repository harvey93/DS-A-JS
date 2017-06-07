const sort1 = arr => {
    let res = [];
    for(let i = 1; i <= arr.length; i++) {
        res.push(i);
    }
    return res;
};

const sort2 = arr => {
    let hash = new Map();
};


console.log(sort1([1,3,2,2,3,5]));