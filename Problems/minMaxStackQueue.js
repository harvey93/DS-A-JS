let MinMaxStack = require("./minMaxStack.js");

class MinMaxStackQueue {
    constructor(){
        this.pushStack = new MinMaxStack();
        this.popStack = new MinMaxStack();
    }

    insert(val) {
        this.pushStack.insert(val);
    }

    remove(){
        
    }
}

let queue = new MinMaxStackQueue();
queue.insert(3);
queue.insert(1);
queue.insert(4);
queue.insert(0);
queue.insert(6);
console.log(queue);