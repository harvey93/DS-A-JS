class MinMaxStack {
    constructor(){
        this.max = null;
        this.min = null;
        this.store = [];
    }

    insert(val) {
        if(this.max === null || val > this.max) {
            this.max = val;
        }
        if(this.min === null || val < this.min) {
            this.min = val;
        }
        this.store.push({val, max: this.max, min: this.min});
    }

    remove(){
        let res = this.store.pop();
        if(this.isEmpty()){
            this.max = null;
            this.min = null;
        } else {
            this.max = this.peek().max;
            this.min = this.peek().min;
        }
        return res;
    }

    peek(){
        return this.store[this.store.length - 1];
    }

    isEmpty() {
        return this.store.length === 0;
    }
}

// let stack = new MinMaxStack();
// stack.insert(3);
// stack.insert(1);
// stack.insert(6);
// stack.remove();
// stack.insert(2);
// stack.insert(10);
// stack.remove();
// stack.insert(0);
// console.log(stack);

module.exports = MinMaxStack;
