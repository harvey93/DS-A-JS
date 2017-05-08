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
}

class StackQueue {
  constructor(){
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  queue(val){
    this.pushStack.push(val);
  }

  dequeue(){
    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        let val = this.pushStack.pop();
        // console.log(val);
        this.popStack.push(val);
      }
    }
    return this.popStack.pop();
  }
}

let queue = new StackQueue();

queue.queue(5);
queue.queue(3);
queue.queue(4);
queue.queue(10);

queue.dequeue();
queue.dequeue();

queue.queue(2);
queue.queue(1);

queue.dequeue();
queue.dequeue();
queue.dequeue();


console.log(queue);
