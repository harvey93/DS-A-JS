const parens = (openRemain, closedRemain, str = "") => {
  if (!closedRemain) {
    closedRemain = openRemain;
  }
  if (closedRemain === 0) {
    console.log(str);
    return;
  }

  if (openRemain > 0) {
    parens(openRemain - 1, closedRemain, str + "(");
    if (openRemain < closedRemain) {
      parens(openRemain, closedRemain - 1, str + ")");
    }
  }else {
    parens(openRemain, closedRemain - 1, str + ")");
  }
};


function Word(name) {
  var a = name;

  this.getName = function(){
    return name;
  };

}
let word = new Word('john');

console.log(word.getName());

// parens(3);
