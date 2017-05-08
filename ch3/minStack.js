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
stack.toString();
