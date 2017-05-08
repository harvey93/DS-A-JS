const Node = require('./node.js');

const palindrome = (node) => {
  let arr = [];
  let currentNode = node;
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  let arr2 = arr.slice().reverse();
  let i = 0;
  while (i < arr.length) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
    i++;
  }
  return true;
};

let node1 = new Node("r");
let node2 = new Node("a");
let node3 = new Node("c");
let node4 = new Node("e");
let node5 = new Node("c");
let node6 = new Node("a");
let node7 = new Node("p");
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// console.log(removeDups(node1));
console.log(palindrome(node1));

// let currentNode = node1;
//
// while (currentNode) {
//   currentNode.toString();
//   currentNode = currentNode.next;
// }
