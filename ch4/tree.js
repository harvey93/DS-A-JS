class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  prettyPrint(current){
    if(current.left){
      prettyPrint(current.left);
    }
    console.log(current.val;
    if(current.right){
      prettyPrint(current.right);
    }
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