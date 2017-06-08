const lookSay = arr => {
    let current = arr[0];
    let res = [[1, arr[0]]];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === current) {
            res[res.length - 1][0] = res[res.length - 1][0] + 1;
        }else {

            res.push([1, arr[i]]);
            current = arr[i];
        }
    }
    return res;
};

console.log(lookSay([1,2,1,1,1,5,5,5]));