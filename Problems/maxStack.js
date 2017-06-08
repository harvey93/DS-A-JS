class maxStack {
    constructor(){
        this.max = null;
        this.store = [];
    }

    insert(val){
        if(val > this.max) {
            this.max = val;
        }
        this.store.push({max: this.max, val});
    }

    remove(){
        this.store.pop();
        this.max = this.peek.max;
    }

    peek(){
        this.store[this.store.length - 1];
    }
        
}

let myStack = new maxStack();
myStack.insert(4);
myStack.insert(5);
myStack.insert(3);
myStack.insert(8);
myStack.insert(2);
myStack.remove();
// myStack.remove();
console.log(myStack);