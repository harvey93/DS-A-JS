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
    return this.store[this.store.length];
  }
}

class sortStack {
  constructor() {
    this.store = new Stack();
  }

  push(val){
    console.log(this.store.peek());
  }

  pop(){
    this.store.pop();
  }
}


let stack = new sortStack();

stack.push(5);
// stack.push(12);
// stack.push(14);
