const avg = (...n) => {
    let total = 0;
    n.forEach(el => {total += el;});
    return total/n.length;
};

console.log(avg(1,5,3,10));