class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }

  addBST(node){
    if(node.data > this.data){
      if(this.right === null){
        this.right = node;
      }else {
        this.right.addBST(node);
      }      
    }else {
      if(this.left === null){
        this.left = node;
      } else {
        this.left.addBST(node);
      }
    }
  }

  inOrderTraversal(arr = []){
    if(this.left){
      this.left.inOrderTraversal(arr);
    }
    arr.push(this.data);

    if(this.right){
      this.right.inOrderTraversal(arr);
    }

    return arr;
  }
}


let node1 = new Node(15);
let node2 = new Node(8);
let node3 = new Node(30);
let node4 = new Node(3);
let node5 = new Node(12);
let node6 = new Node(15);
let node7 = new Node(2);
let node8 = new Node(0);

node1.addBST(node2);
node1.addBST(node5);
node1.addBST(node4);
node1.addBST(node3);
node1.addBST(node8);
node1.addBST(node6);
node1.addBST(node7);
console.log(node1.inOrderTraversal());

// let node1 = new Node(5);
// let node2 = new Node(3);
// let node3 = new Node(8);
// let node4 = new Node(2);
// let node5 = new Node(4);
// let node6 = new Node(6);
// let node7 = new Node(9);
// let node8 = new Node(1);

// node1.left = node2;
// node1.right = node3;

// node2.left = node4;
// node2.right = node5;

// node3.left = node6;
// node3.right = node7;

// node4.left = node8;


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
// console.log(checkBST(node1));
