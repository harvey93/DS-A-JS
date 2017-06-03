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
        // if ( tableI >= i) {
        //     exch(tableI, i, arr);
        // } else {
        //     while(tabl)

        // }

    }
    return arr;
};

const exch =(i, j, arr) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// let arr = ["a", "b", "c", "d", "e"];
let order = [2,4,1,3,0];

// Tests

if (orderedArr(order, ["a", "b", "c", "d", "e"]) === inPlaceOA(order, ["a", "b", "c", "d", "e"])) {
    console.log(true);
} else {
    console.log(inPlaceOA(order, ["a", "b", "c", "d", "e"]));
    console.log(orderedArr(order, ["a", "b", "c", "d", "e"]));
}

