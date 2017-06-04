const productify = arr => {
    let product = arr.reduce( (acc, el) => acc * el);
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(product / arr[i]);
    }
    return arr;
};

const prodNoDiv = arr => {
    let products = [];
    for(let i = 0; i < arr.length; i++) {
        products.push(1);
    }
    let lowerProd = 1;
    for(let i = 0; i < arr.length; i++) {
        products[i] *= lowerProd;
        lowerProd *= arr[i];
    }

    let upperProduct = 1;
    for(let i = arr.length - 1; i >= 0; i--) {
        products[i] *= upperProduct;
        upperProduct *= arr[i];

    }
    return products;
};

console.log(productify([1,2,3,4]));
console.log(prodNoDiv([1,2,3,4]));