const Node = require('./node.js');

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

let node1 = new Node(11);
let node2 = new Node(12);
let node3 = new Node(13);
let node4 = new Node(14);
let node5 = new Node(15);
let node6 = new Node(16);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

// console.log(removeDups(node1));
deleteNode(node4);

let currentNode = node1;

while (currentNode) {
  currentNode.toString();
  currentNode = currentNode.next;
}
