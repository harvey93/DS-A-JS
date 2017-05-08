const Node = require('./node.js');

const partitions = (node, part) => {
  let arr1 = [];
  let arr2 = [];
  let currentNode = node;
  while (currentNode) {
    if (currentNode.val < part) {
      arr1.push(currentNode);
    }else {
      arr2.push(currentNode);
    }
    currentNode = currentNode.next;
  }
  let arr3 = arr1.concat(arr2);
  arr3[arr3.length - 1].next = null;
  let i = 0;
  while (i < arr3.length - 1) {
    arr3[i].next = arr3[i + 1];
    i++;
  }
  // console.log(arr1);
  // console.log(arr2);
  // console.log(arr3);
};

let node1 = new Node(3);
let node2 = new Node(5);
let node3 = new Node(8);
let node4 = new Node(5);
let node5 = new Node(10);
let node6 = new Node(2);
let node7 = new Node(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// console.log(removeDups(node1));
partitions(node1, 5);

let currentNode = node1;

while (currentNode) {
  currentNode.toString();
  currentNode = currentNode.next;
}
