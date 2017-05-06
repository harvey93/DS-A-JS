const zeroMatrix = (matrix) => {
  let rows = new Map();
  let cols = new Map();
  let i = 0;
  while (i < matrix.length) {
    let j = i;
    while (j < matrix[0].length) {
      if (matrix[i][j] === 0) {
        rows.set(i, true);
        cols.set(j, true);
      }
      j++;
    }
    i++;
  }
  i = 0;
  while (i < matrix.length) {
    let j = i;
    while (j < matrix[0].length) {
      if (rows.get(i) || cols.get(j)) {
        matrix[i][j] = 0;
      }
      j++;
    }
    i++;
  }
  return matrix;
};

console.log(zeroMatrix(
  [[1,0,3],
  [4,5,6],
  [7,8,0]])
);
