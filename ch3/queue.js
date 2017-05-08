class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
    this.last = null;
  }
}

class Queue {
  constructor() {
    this.currentNode = null;
  }

  queue(val){
    if (!this.currentNode) {
      this.currentNode = new Node(val);
      this.last = this.currentNode;
    }else {
      let newLast = new Node(val);
      this.last.next = newLast;
      this.last = newLast;
    }
  }

  dequeue(){
    if (!this.currentNode) {
      throw "Empty Queue";
    }
    this.currentNode = this.currentNode.next;
  }
}

module.exports = Queue;


// let myQueue = new Queue();
// myQueue.queue(5);
// myQueue.queue(6);
// myQueue.queue(7);
// myQueue.queue(8);
// myQueue.queue(9);
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.currentNode);
// console.log(myQueue.last);
