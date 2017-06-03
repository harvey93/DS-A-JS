const foldingCypher = str => {
    // return "z".charCodeAt();
    let i = 97;
    let j = 122;
    let myMap = new Map();
    while (i < j) {
        myMap.set(String.fromCharCode(i), String.fromCharCode(j));
        myMap.set(String.fromCharCode(j), String.fromCharCode(i));
        i++;
        j--;
    }
    let res = "";
    for(let k = 0; k < str.length; k++) {
        res += myMap.get(str[k]);
    }
    return res;
};

console.log(foldingCypher("abcd"));