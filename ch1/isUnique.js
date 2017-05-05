const isUnique = (str) => {
  const arr = str.split("");
  const hash = {};
  arr.forEach(el => {
    if (hash[el]) {
      hash[el] += 1;
    }else {
      hash[el] = 1;
    }
  });
  // for(let key in Object(hash)){
  //   console.log(hash[key]);
  // }
  if (Object.keys(hash).length === arr.length) {
    return true;
  }else {
    return false;
  }
};

console.log(isUnique("cars"));
