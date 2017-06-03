const uniqueSubs = str => {
    let arr = str.split("");
    let mySet = new Set();
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            mySet.add(arr.slice(i, j + 1).join(""));
        }
    }
    return mySet;
};

console.log(uniqueSubs("carcar"));