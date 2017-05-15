// const counter = input => {
//   let count = 0;
//   const _counter = () => {
//     count++;
//     console.log(`${input}${count}`);
//   };
//
//   return _counter;
// };
//
// let counterG = counter("G");
// let counterG2 = counter("G");
//
// counterG();
// counterG();
// counterG();
// counterG();

// const preCounter = input => {
  let hash = {};
  const counter  = (str) => {
    return () => {
      if (hash[str]) {
        hash[str]++;
      }else {
        hash[str] = 1;
      }
      console.log(`${str}${hash[str]}`);
    };
  };
// };

// let counter = preCounter();

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


// const counter = input => {
//  let last = 0;
//  const _counter = () => {
//    last++;
//    console.log(input,last);
//  };
//
//  return _counter;
// };
//
// let counterG = counter("G");
//
// counterG();
