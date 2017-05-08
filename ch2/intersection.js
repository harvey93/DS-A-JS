const Node = require('./node.js');

const intersection = (node1, node2) => {

};

const diff = (node1, node2) => {

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

let node7 = new Node("z");
let node8 = new Node("y");
let node9 = new Node("x");
node7.next = node8;
node8.next = node9;
node9.next = node4;

// console.log(removeDups(node1));
console.log(intersection(node1, node7));

// let currentNode = node1;
//
// while (currentNode) {
//   currentNode.toString();
//   currentNode = currentNode.next;
// }
