const pairSum = (arr, k) => {
    let mySet = new Set();
    let res = [];
    arr.forEach(el => {

        if(mySet.has(k - el) && !mySet.has(el)){
            res.push([k - el, el]);
        }
        mySet.add(el);
    });
    return res;
};

console.log(pairSum([1, 2, -1, -1, -2], 0));