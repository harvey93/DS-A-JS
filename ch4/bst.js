class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }

  static checkBST(node, min = null, max = null) {
    if(!node) {
      return true;
    }
    if((min && node.data <= min) 
      || max && node.data > max) {
        return false;
      }

    if(!Node.checkBST(node.left, min, node.data) ||
      !Node.checkBST(node.right, node.data, max)){
        return false;
      }

    return true;
  }

  deleteBST(val, parent = null){
    if(this.data === val){
      console.log(parent);
      console.log(this);
      return this;
    }
    if(val > this.data){
      if(this.right){
        return this.right.deleteBST(val, this);
      }
    }else {
      if(this.left){
        return this.left.deleteBST(val , this);
      }
    }
    return -1;
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

  getMin(){
    if(this.left === null){
      return this.data;
    }else {
      return this.left.getMin();
    }
  }

  getMax(){
    if(this.right === null){
      return this.data;
    } else {
      return this.right.getMax();
    }
  }

}


let node1 = new Node(15);
let node2 = new Node(8);
let node3 = new Node(30);
let node4 = new Node(3);
let node5 = new Node(12);
let node6 = new Node(16);
let node7 = new Node(2);
let node8 = new Node(0);
let node9 = new Node(55);
let node10 = new Node(80);

node1.addBST(node2);
node1.addBST(node5);
node1.addBST(node4);
node1.addBST(node3);
node1.addBST(node8);
node1.addBST(node6);
node1.addBST(node7);
node1.addBST(node9);
node1.addBST(node10);
// console.log(node1.inOrderTraversal());
// console.log(node1.getMax());

node1.deleteBST(2);


// console.log(Node.checkBST(node1));

// console.log(checkBST(node1));
