
let map = {};

const counter = letter => {
    if(map[letter]){
        map[letter]++;
    } else {
        map[letter] = 1;
    }  
    console.log(`${letter}${map[letter]}`);
};


counter('G');
counter('G');
counter('H');
