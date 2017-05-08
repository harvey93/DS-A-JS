class Stack {
  constructor() {
    this.store = [];
  }

  push(val){
    this.store.push(val);
  }

  pop(){
    return this.store.pop();
  }

  isEmpty(){
    if (this.store.length === 0) {
      return true;
    }
  }

  peek(){
    // console.log(this.store);
    return this.store[this.store.length - 1];
  }
}

class sortStack {
  constructor() {
    this.store = new Stack();
  }

  push(val){
    if (this.store.isEmpty() || this.store.peek() <= val) {
      this.store.push(val);
    }else {
      let tempStack = new Stack();
      while (this.store.peek() > val) {
        if (this.store.isEmpty()) {
          break;
        }
        tempStack.push(this.store.pop());
      }
      this.store.push(val);
      while (!tempStack.isEmpty()) {
        this.store.push(tempStack.pop());
      }
      // console.log(tempStack);
      // console.log(this.store);
    }
  }

  pop(){
    this.store.pop();
  }
}


let stack = new sortStack();

stack.push(3);
stack.push(6);
stack.push(10);
stack.push(4);
stack.push(0);

stack.push(12);
stack.push(14);
stack.push(5);
stack.push(6);

console.log(stack);
