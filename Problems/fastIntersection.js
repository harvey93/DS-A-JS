const fastIntersection = (arr1, arr2) => {
    let set = new Set();
    let res = [];
    arr1.forEach(el => {
        set.add(el);
    });
    arr2.forEach(el => {
        if(set.has(el)) {
            res.push(el);
        }
    });
    return res;
};

console.log(fastIntersection([10,12,1,4,6], [10,4,2,6,22]));