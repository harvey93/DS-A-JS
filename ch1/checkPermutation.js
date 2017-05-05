const checkPermutation = (str1, str2) => {
  const myMap = new Map();
  const myMap2 = new Map();
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  for (let i = 0; i < arr1.length; i++) {
    if (!myMap.get(arr1[i])) {
      myMap.set(arr1[i], 1);
    }else {
      const newVal = myMap.get(arr1[i]) + 1;
      myMap.set(arr1[i], newVal);
    }
  }
  arr2.forEach(el => {
    if (!myMap2.get(el)) {
      myMap2.set(el, 1);
    }else {
      const newVal = myMap2.get(el) + 1;
      myMap2.set(el, newVal);
    }
  });

  if (myMap.size === myMap2.size) {
    for(const key of myMap.keys()){
      if (myMap.get(key) !== myMap2.get(key)) {
        return false;
      }
    }
  }else {
    return false;
  }
  return true;

};

console.log(checkPermutation("racecar", "racecard"));


// console.log(test(["h", "e", "v"]));
