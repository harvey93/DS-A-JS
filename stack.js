class Stack {
  constructor() {
    this.lastNode = new Node();
  }

  push(val){
    let current = new Node(val);
    current.parent = this.lastNode;
    this.lastNode = current;
  }

  pop(){
    if (!this.lastNode.val) {
      throw "Stack is Empty";
    }
    this.lastNode = this.lastNode.parent;
  }

}

class Node{
  constructor(val = null){
    this.val = val;
    this.parent = null;
  }
}

let myStack = new Stack();
console.log(myStack);
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);
myStack.push(9);
myStack.push(10);
console.log(myStack.lastNode);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.lastNode);
myStack.push(12);
myStack.push(15);
console.log(myStack.lastNode);
// myStack.pop();
