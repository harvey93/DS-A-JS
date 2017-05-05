const palPerm = (str) => {
  const myMap = new Map();
  let oddCounter = 0;
  str.split(" ").join("").split("").forEach(el => {
    if (myMap.get(el)) {
      const newVal = myMap.get(el) + 1;
      myMap.set(el, newVal);
    }else {
      myMap.set(el, 1);
    }
  });
  myMap.forEach(el => {
    if (el % 2 !== 0){
      oddCounter++;
    }
  });
  if (oddCounter > 1) {
    return false;
  }
  return true;
};

console.log(palPerm("taco cat"));
