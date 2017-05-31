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

  static kthLargest(root, k){
    let arr = root.inOrderTraversal().reverse();
    console.log(arr[k - 1]);
  }


  static successor(node){
   if(node.right){
     return node.right.getMin();
   } else {
     let parent = node1.getParent(node);
     return parent.getFirstRightChild();
    // console.log(node1.getParent(node));
   }
  }

  getFirstRightChild(){
    // console.log(this);
    // console.log(node1.getParent(this));
    let parent = node1.getParent(this);
    if(parent){
      return null;
    }else {  
      if(this.isLeftChild(parent)){
        return parent;
      } else {
        return parent.getFirstRightChild();
      }
    }
  }

  getParent(node){
    if(this.right === node || this.left === node){
      return this;
    }
    if(this.data > node.data){
      if(this.left){
        return this.left.getParent(node);
      }
    }else {
      if(this.right){
      return this.right.getParent(node);
      }
    }
  }


  deleteBST(val, parent = null){
    if(this.data === val){
      if(this.right && this.left){
        // console.log('both');
        // console.log(this);
        let newVal = this.right.getMin();
        node1.deleteBST(newVal.data);
        if(this.isLeftChild(parent)){
          parent.left = newVal;
        }else {
          parent.right = newVal;
        }
        if(this.right !== newVal){
          newVal.right = this.right;
        }
          newVal.left = this.left;
          // newVal.right = this.right;
        // console.log(this);
      }else if (this.right) {
        // console.log('right');
        // console.log(this);
        if(this.isLeftChild(parent)){
          parent.left = this.right;
        }else {
          parent.right = this.right;
        }

      }else if (this.left) {
        // console.log('left');
        // console.log(this);
        if(this.isLeftChild(parent)){
          parent.left = this.left;
        }else {
          parent.right = this.left;
        }

      }else {
        // console.log('neither');
        // console.log(this);
        if(this.isLeftChild(parent)){
          parent.left = null;
        }else {
          parent.right = null;
        }
      }
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


  isLeftChild(parent){
    if(parent.left === this){
      return true;
    }else {
      return false;
    }
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
      return this;
    }else {
      return this.left.getMin();
    }
  }

  getMax(){
    if(this.right === null){
      return this;
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
let node11 = new Node(45);
let node12 = new Node(78);

node1.addBST(node2);
node1.addBST(node5);
node1.addBST(node4);
node1.addBST(node3);
node1.addBST(node8);
node1.addBST(node6);
node1.addBST(node7);
node1.addBST(node9);
node1.addBST(node10);
node1.addBST(node11);
node1.addBST(node12);
// console.log(node1.inOrderTraversal());
// console.log(node1.getMax());

  //         15
  //      8       30
  //    3  12   16   55
  //  0            45   80  
  //   2               78

// console.log(node1.inOrderTraversal());
// node1.deleteBST(8);
console.log(node1.inOrderTraversal());
console.log(Node.successor(node10));
// console.log(node2.getMin());
// Node.kthLargest(node1, 5);

// console.log(Node.checkBST(node1));

// console.log(checkBST(node1));
