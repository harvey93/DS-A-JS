const stringCompression = (str) => {
  let res = "";
  let i = 1;
  let temp = str[0];
  let tempCount = 1;
  while (i < str.length) {
    if (str[i] === temp) {
      tempCount++;
    }else {
      res += `${temp}${tempCount}`;
      temp = str[i];
      tempCount = 1;
    }
    i++;
  }
  res += `${temp}${tempCount}`;
  return res;
};

console.log(stringCompression("aabbcccccaaa"));
