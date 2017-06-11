const orderedArr = (table, arr) => {
    return arr.map((el, i) => (
        arr[table[i]]
    ));
}; 

const inPlaceOA = (table, arr) => {
    for(let i = 0; i < arr.length; i++) {
        let tableI = table[i];
        while (tableI < i) {
            tableI = table[tableI];
        }
        exch(tableI, i, arr);
    }
    return arr;
};

const exch =(i, j, arr) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// let arr = ["a", "b", "c", "d", "e"];
let order = [0,9,2,8,7,3,6,4,1,5];

// Tests


console.log(inPlaceOA(order, ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]));
console.log(orderedArr(order, ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]));


