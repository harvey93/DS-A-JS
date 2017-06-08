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
        }
        return this.popStack.remove();
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

    getMax(){
        let max1 = null;
        let max2 = null;
        if(!this.pushStack.isEmpty()){
            max1 = this.pushStack.max;
        }
        if(!this.popStack.isEmpty()){
            max2 = this.popStack.max;
        }
        // console.log(max1);
        // console.log(max2);

        if(max1 !== null && max2 !== null) {
            // console.log('both');
            return max1 > max2 ? max1 : max2;
        } else if (max1 !== null) {
            // console.log('1');
            return max1;
        } else if (max2 !== null) {
            // console.log('2');
            return max2;
        } else {
            // console.log('none');
            return null;
        }    }
}

let queue = new MinMaxStackQueue();
queue.insert(-5);
queue.insert(-4);
queue.insert(4);
queue.insert(0);
queue.insert(6);
queue.remove();
// queue.insert(-1);
queue.remove();

console.log(queue.getMin());
// console.log(queue);
// queue.getMin();