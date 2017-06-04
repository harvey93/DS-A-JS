const productify = arr => {
    let product = arr.reduce( (acc, el) => acc * el);
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(product / arr[i]);
    }
    return arr;
};

const prodNoDiv = arr => {

    return arr;
};

console.log(productify([1,2,3,4]));
console.log(prodNoDiv([1,2,3,4]));