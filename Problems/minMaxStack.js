class minMaxStack {
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
        this.store.pop();
        this.max = this.peek.max;
        this.min = this.peek.min;
    }

    peek(){
        this.store[this.store.length - 1];
    }
}

let stack = new minMaxStack();
stack.insert(1);
stack.insert(4);
stack.insert(2);
stack.insert(10);
stack.insert(0);

console.log(stack);
