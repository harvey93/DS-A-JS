const Node = require('./node.js');

const intersection = (node1, node2) => {
  let difference = diff(node1, node2);
  let longer;
  let shorter;
  let offset;
  if (difference[0] > difference[1]) {
    longer = node1;
    shorter = node2;
    offset = difference[0] - difference[1];
  }else {
    longer = node2;
    shorter = node1;
    offset = difference[1] - difference[0];
  }
  // console.log(longer);
  // console.log(shorter);
  // console.log(offset);
  while (longer && shorter) {
    // console.log(longer);
    // console.log(shorter);
    if (longer === shorter) {
      return true;
    }
    longer = longer.next;
    if (offset <= 0) {
      shorter = shorter.next;
    }
    offset--;
  }
  // console.log(difference);
  // while (longer) {
  //   if (difference[] < 0) {
  //     break;
  //   }
  //   console.log(longer);
  //   longer = longer.next;
  //   difference--;
  // }
  return false;
};

const diff = (node1, node2) => {
  let i = 0;
  let currentNode = node1;
  while (currentNode) {
    // console.log(currentNode);
    currentNode = currentNode.next;
    i++;
  }
  let j = 0;
  currentNode = node2;
  while (currentNode) {
    currentNode = currentNode.next;
    j++;
  }
  // return Math.abs(j - i);
  return [i, j];
};



let node1 = new Node("a");
let node2 = new Node("b");
let node3 = new Node("c");
let node4 = new Node("d");
let node5 = new Node("e");
let node6 = new Node("f");
let node7 = new Node("g");
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// let node8 = new Node("z");
// let node9 = new Node("y");
let node10 = new Node("x");
// node8.next = node9;
// node9.next = node10;
node10.next = node4;

// console.log(diff(node1, node10));
// console.log(removeDups(node1));
console.log(intersection(node1, node10));

// let currentNode = node1;
//
// while (currentNode) {
//   currentNode.toString();
//   currentNode = currentNode.next;
// }
