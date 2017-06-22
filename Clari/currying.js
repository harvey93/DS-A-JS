const avg = (...n) => {
    let total = 0;
    n.forEach(el => {total += el;});
    return total/n.length;
};

const spiceUp = function(fn, ...n) {
    return function(...m) {
        return fn.apply(this, n.concat(m));
        // return fn(...n.concat(m));
    };
};

const spiceUp2 = (fn, ...n) => {
    return (...m) => {
        return fn(...n.concat(m));
        // return fn.apply(this, n.concat(m));
        // console.log(n.concat(m));
    };
    // console.log(fn);
    // return fn.apply(this, n);
    
};

let doAvg = spiceUp(avg, 1,5,15);

console.log(doAvg(4,5,6));
// console.log(doAvg);