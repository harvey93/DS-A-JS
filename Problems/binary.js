const binary = num => {
    let res = [];
    while (num !== 0) {
        res.unshift(num % 2);
        num = Math.floor( num / 2);
    }
    return res.join('');
    
};

console.log(binary(5));

// Design Twitter, median in unsorted array, . Evaluate a poker hand, fermi estimation, lru cache, 3 sum, 