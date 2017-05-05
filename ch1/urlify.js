const urlify = (str) => {
  return str.trim().split(" ").join("%20");
};

console.log(urlify("Mr John Smith    "));
