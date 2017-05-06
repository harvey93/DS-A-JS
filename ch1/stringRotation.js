const stringRotation = (str1, str2) => {
  let toCheck = str1.concat(str1);
  return toCheck.includes(str2);
};

console.log(stringRotation("waterbottle", "erbottlewat"));
