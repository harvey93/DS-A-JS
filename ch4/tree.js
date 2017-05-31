class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.arr = [];
  }

  static height(node){
    if (!node) {
      return 0;
    }
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }


  inOrderPrint(){
    if(this.left){
      this.left.inOrderPrint();
    }
    console.log(this.data);
    if(this.right){
      this.right.inOrderPrint();
    }
  }

  preOrderPrint(){
    console.log(this.data);
    if(this.left){
      this.left.preOrderPrint();
    }
    if(this.right){
      this.right.preOrderPrint();
    }
  }

  postOrderPrint(){
    if(this.left){
      this.left.postOrderPrint();
    }
    if(this.right){
      this.right.postOrderPrint();
    }
    console.log(this.data);
  }

}

let node1 = new Node("5");
let node2 = new Node("3");
let node3 = new Node("8");
let node4 = new Node("2");
let node5 = new Node("4");
let node6 = new Node("6");
let node7 = new Node("9");
let node8 = new Node("1");

node1.left = node2;
// node1.right = node3;
//
// node2.left = node4;
// node2.right = node5;
//
// node3.left = node6;
// node3.right = node7;
//
// node4.left = node8;




//    5
//   3   8
// 2  4 6  9
// 1

// let arr = [];


// const inOrderArray = (node, arr = []) => {
//   if(node.left){
//     inOrderArray(node.left, arr);
//   }
//   arr.push(node.data);
//
//   if(node.right){
//     inOrderArray(node.right, arr);
//   }
//   return arr;
// };


// console.log(inOrderArray(node1));
// node1.inOrderPrint();
// node1.preOrderPrint();
// node1.postOrderPrint();
// console.log(Node.height(node3));
