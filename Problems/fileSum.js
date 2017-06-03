let fs = require("fs");

const fileSum = file => {
    let text = fs.readFileSync(`./${file}`).toString("utf-8").split("\n");
    let sum = 0;
    text.forEach(el => {
        if(el[0] !== "#") {
            sum += parseInt(el);
        }
    });
    return sum;
};

console.log(fileSum("test.txt"));
    