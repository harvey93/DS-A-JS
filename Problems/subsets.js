const subsets = arr => {
    if (arr.length === 0) {
        return [[]];
    } 
    let first = arr[0];
    let prev = subsets(arr.slice(1));
    let newSets = prev.map(el => {
        // console.log(el);
        return el.concat(first);
    });

    return prev.concat(newSets);
};

console.log(subsets(["a", "b", "c"]));
// console.log(subsets(["a"]));