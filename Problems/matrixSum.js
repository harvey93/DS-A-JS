const matrixSum = (matrix, topLeft, bottomRight) => {
    let sum = 0;
    for(let j = topLeft[0]; j <= bottomRight[0]; j++) {
        for(let i = topLeft[1]; i <= bottomRight[1]; i++){
            sum += matrix[j][i];
        }   
    }
    return sum;
};

let matrix = 
[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
// 54
console.log(matrixSum(matrix, [0,0], [3,3]));