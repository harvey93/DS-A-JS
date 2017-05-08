const Node = require('./node.js');

const loopDetection = (node) => {
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
node7.next = node4;

// console.log(loopDetection(node1));

let currentNode = node1;

while (currentNode) {
  currentNode.toString();
  currentNode = currentNode.next;
}
