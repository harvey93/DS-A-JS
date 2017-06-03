Array.prototype.myMap = function(cb){
    let res = [];
    this.forEach( el => {
        res.push(cb(el));
    });
    return res;
};

let arr = [1,2,3,4,5];

let brr = arr.myMap(el => el * 2);

console.log(brr);