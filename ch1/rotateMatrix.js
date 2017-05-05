const rotateMatrix = (matrix) => {
  let i = 0;
  while (i <= matrix.length) {
    let j = i;
    while (j < matrix.length) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
      j++;
    }
    i++;
  }
  i = 0;
  while (i < matrix.length) {
    matrix[i] = matrix[i].reverse();
    i++;
  }
  return matrix;
};

console.log(
  rotateMatrix(
  [[1,2,3],
  [4,5,6],
  [7,8,9]])
);

// [7,4,1]
// [8,5,2]
// [9,6,3]
