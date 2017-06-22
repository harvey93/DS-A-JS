const sum = (num1, num2) => {
    if(num2){
        return num1 + num2;
    } else {
        return (num) => { 
            return num1 + num;
        };
    }
};

console.log(sum(2,3));
console.log(sum(2)(3));
