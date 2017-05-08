const Queue = require('./queue.js');
const Stack = require('./stack.js');

let myStack = new Stack();
let myQueue = new Queue();


class minStack {
  constructor() {
    this.store = new Stack();
    this.min = null;
  }

  push(val){
    let valObj = {};
    if (this.min === null || val < this.min) {
      this.min = val;
    }
    valObj = {val: val, min: this.min};
    this.store.push(valObj);
  }

  pop(){
    this.store.pop();
    // console.log(this.store.lastNode.val);

    this.min = this.store.lastNode.val.min;
    // console.log(this.store.lastNode.val.min);
  }

  toString(){
    let currentNode = this.store.lastNode;
    while (currentNode.parent) {
      console.log(currentNode.val);
      currentNode = currentNode.parent;
    }
  }
}

let stack = new minStack();
stack.push(10);
stack.push(15);
stack.push(0);
stack.push(12);
stack.pop();
stack.pop();
stack.push(13);
stack.push(-5);
stack.push(5);
stack.push(8);
stack.toString();
