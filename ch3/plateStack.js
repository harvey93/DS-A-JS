class plateStack {
  constructor(cap) {
    this.store = [[]];
    this.pointer = 0;
    this.cap = cap;
  }

  push(val){
    this.store[this.pointer].push(val);
    if (this.store[this.pointer].length === this.cap) {
      this.store.push([]);
      this.pointer++;
    }
  }
}

let stack = new plateStack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
console.log(stack.store);
