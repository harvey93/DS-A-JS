// 4 4 4 4 4 4 4 
// 4 3 3 3 3 3 4 
// 4 3 2 2 2 3 4 
// 4 3 2 1 2 3 4 
// 4 3 2 2 2 3 4 
// 4 3 3 3 3 3 4 
// 4 4 4 4 4 4 4 

const printGrid = num => {
    let arr = [];
    for(let i = 0; i < 2 * num - 1; i++) {
        arr[i] = new Array();
        for(let j = 0; j < 2 * num - 1; j++) {
            arr[i][j] = 0;
        }
    }
    let i = 0;
    let j = arr.length - 1;
    let currentNum = num;
    while(i <= j) {
        fillGrid(arr, currentNum, i, j);
        currentNum--;
        i++;
        j--;
    }
    // fillGrid(arr, num, 0, 4);
    // fillGrid(arr, num - 1, 1, 3);
    // fillGrid(arr, num - 2, 2, 2);
    return arr;
};

const fillGrid = (arr, num, start, end) => {
    for(let i = 0; i < arr[0].length; i++) {
        if(arr[start][i] === 0){
            arr[start][i] = num;
        }
    }
    for(let i = 0; i < arr[0].length; i++) {
        if(arr[end][i] === 0){
            arr[end][i] = num;
        }
    }
    for(let i = start; i < end; i++) {
        if(arr[i][start] === 0){
            arr[i][start] = num;
        }
    }
    for(let i = start; i < end; i++) {
        if(arr[i][end] === 0){
            arr[i][end] = num;
        }
    }
};

console.log(printGrid(4));