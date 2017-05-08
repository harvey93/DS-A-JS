class plateStack {
  constructor(cap) {
    this.store = [[]];
    this.pointer = 0;
    this.cap = cap;
  }

  push(val){
    if (this.store[this.pointer].length === this.cap) {
      this.store.push([]);
      this.pointer++;
    }
    this.store[this.pointer].push(val);
  }

  pop(){
    if (this.store[this.pointer].length === 0) {
      this.store.pop();
      this.pointer--;
    }
    this.store[this.pointer].pop();
  }
}

let stack = new plateStack(5);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(10);

stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

// stack.push(4);

console.log(stack.store);
