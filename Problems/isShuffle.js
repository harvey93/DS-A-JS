// const noRepeatShuffle = (str1, str2, str3) => {

// };

// console.log(noRepeatShuffle("XXY", "XXZ", "XXYXXZ"));

let hash = {};

hash['hello'] = 'bye';
hash['hi'] = 'yes';
hash['world'] = 'no';
delete hash['hi'];
console.log(hash);