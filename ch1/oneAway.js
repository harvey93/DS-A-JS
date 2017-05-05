const oneAway =(str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  if (arr1.length === arr2.length){
    return replace(arr1, arr2);
  }else if (Math.abs(arr1.length - arr2.length) > 1) {
    return false;
  }else {
    return addRemove(arr1, arr2);
  }
};

const addRemove = (arr1, arr2) => {
  let longer = arr1.length > arr2.length ? arr1 : arr2;
  let shorter = arr1.length < arr2.length ? arr1 : arr2;
  let i = 0;
  let j = 0;
  let wrongCounter = 0;
  while (i < longer.length) {
    if (longer[i] !== shorter[j]) {
      wrongCounter++;
      i++;
    }else {
      i++;
      j++;
    }
    if (wrongCounter > 1) {return false;}
  }
  return true;
};

const replace = (arr1, arr2) => {
  let i = 0;
  let wrongCounter = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) {
      wrongCounter++;
    }
    if (wrongCounter > 1) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(oneAway("pare", "paree"));
// console.log(addRemove("pale".split(""), "pal".split("")));
// console.log(replace("palc".split(""), "pare".split("")));
