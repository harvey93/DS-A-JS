const longestComSub = (str1, str2) => {
    let longestSub = "";
    let subs1 = getSubs(str1);
    let subs2 = getSubs(str2);
    let longest = "";
    subs1.forEach(el => {
        if(subs2.has(el)) {
            if(el.length > longest.length) {
                longest = el;
            }
        }
    });
    return longest;
};

const getSubs = (str) => {
    let mySet = new Set();
    for(let i = 0; i < str.length; i++) {
        for(let j = i; j < str.length; j++) {
            mySet.add(str.slice(i, j + 1));
        }
    }
    return mySet;
};

console.log(longestComSub("hello", "zello"));
// console.log(getSubs("hello"));

