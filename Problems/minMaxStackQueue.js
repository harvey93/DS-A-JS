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
        if(this.popStack.isEmpty()){
            while(!this.pushStack.isEmpty()) {
                this.popStack.insert(this.pushStack.remove().val);
            }
            return this.popStack.remove();
        }
    }

    getMin(){
        let min1 = null;
        let min2 = null;
        if(!this.pushStack.isEmpty()){
            min1 = this.pushStack.min;
        }
        if(!this.popStack.isEmpty()){
            min2 = this.popStack.min;
        }
        // console.log(min1);
        // console.log(min2);

        if(min1 !== null && min2 !== null) {
            // console.log('both');
            return min1 < min2 ? min1 : min2;
        } else if (min1 !== null) {
            // console.log('1');
            return min1;
        } else if (min2 !== null) {
            // console.log('2');
            return min2;
        } else {
            // console.log('none');
            return null;
        }
    }
}

let queue = new MinMaxStackQueue();
queue.insert(3);
queue.insert(1);
queue.insert(4);
queue.insert(0);
queue.insert(6);
// queue.remove();
queue.insert(10);
// queue.remove();

console.log(queue.getMin());
// queue.getMin();