const sillyYears = year => {
    let arr = [];
    let currentYear = year;
    while( arr.length < 10) {
        let numString = currentYear.toString();
        let left = parseInt(numString.slice(0, 2));
        let mid = parseInt(numString.slice(1, 2));
        let right = parseInt(numString.slice(2, 2));
        // console.log(left);
        if(left + right === mid){
            arr.push(currentYear);
        }
        currentYear++;
    }
    return arr;
};

console.log(sillyYears(2015));