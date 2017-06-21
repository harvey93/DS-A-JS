
const preCounter = () => {
    let map = {};
    const _counter = letter => {
        return () => {
            if(map[letter]){
                map[letter]++;
            } else {
                map[letter] = 1;
            }  
            console.log(`${letter}${map[letter]}`);
        };
    };
    return _counter;  
};

let counter = preCounter();

let counterG = counter('G');
let counterG2 = counter('G');
let counterG3 = counter('G');

let counterH = counter('H');
let counterH2 = counter('H');

counterG();
counterG2();
counterG3();

counterH();
counterH2();