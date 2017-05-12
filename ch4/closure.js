const counter = input => {
  let count = 0;
  const _counter = () => {
    count++;
    console.log(`${input}${count}`);
  };

  return _counter;
};

let counterG = counter("G");
let counterG2 = counter("G");

counterG();
counterG();
counterG();
counterG();


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
