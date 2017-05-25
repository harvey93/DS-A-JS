class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
}

let node1 = new Node(5);
let node2 = new Node(3);
let node3 = new Node(8);
let node4 = new Node(2);
let node5 = new Node(4);
let node6 = new Node(6);
let node7 = new Node(9);
let node8 = new Node(1);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node4.left = node8;


const checkBST = (node, min = null, max = null) => {
  if (node === null) {
    return true;
  }
  if ((min !== null && node.data <= min) ||
    (max !== null && node.data > max)){
      return false;
  }
  if (!checkBST(node.left, min, node.data) ||
      !checkBST(node.right, node.data, max)) {
      return false;
  }

  return true;
};

// const test = (num, min = null, max = null) => {
//   if(num < 1){
//     return num;
//   }
//   console.log(min);
//   test(num - 1, num, 10);
// };

// console.log(test(4));
console.log(checkBST(node1));
