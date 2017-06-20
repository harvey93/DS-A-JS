// n^2 solution
const threeSum = arr => {
    let set = new Set();
    let res = [];
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if(set.has(0 - sum)) {
                res.push([0 - sum,arr[i], arr[j]]);
                // console.log('in');
            }
            set.add(arr[i]);
            set.add(arr[j]);
        }
    }
    return res;
};

console.log(threeSum([4,-3,-1,10, -8, -2, 50, 100, 200, 321]));