class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
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

let node1 = new Node("1");
let node2 = new Node("2");
let node3 = new Node("3");
let node4 = new Node("4");
let node5 = new Node("5");
let node6 = new Node("6");
let node7 = new Node("7");

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

// node1.inOrderPrint();
// node1.preOrderPrint();
node1.postOrderPrint();
