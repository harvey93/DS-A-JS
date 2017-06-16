const sum =  function (num1, num2){
    if(arguments.length === 2) {
        return num1 + num2;
    } else {
        return function(num) { return num1 + num;};
    }
};

console.log(sum(2,3));
// sum(2,3);
console.log(sum(2)(3));