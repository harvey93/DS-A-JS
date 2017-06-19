// Design Twitter, median in unsorted array, . Evaluate a poker hand, fermi estimation, lru cache, 3 sum, 

// n^2 solution
const twoSum = arr => {
    let res = [];
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // console.log('out');
            if(arr[i] + arr[j] === 0) {
                res.push([i, j]);
                // console.log([i,j]);
            }
        }
    }
    return res;
};


// n solution
const fastTwoSum = arr => {
    // let set = new Set();
    let hash = {};
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if (hash[0 - arr[i]]){
            res.push([hash[0 - arr[i]], i]);
            // console.log('in');
        } 
        // console.log(hash[0 - arr[i]]);
        hash[arr[i]] = i;
    }
    return res;
};

// console.log(twoSum([1,2,3,4,5,6,9,-3,-5]));
console.log(fastTwoSum([10,0,3,12,5,6,9,-3,-5]));