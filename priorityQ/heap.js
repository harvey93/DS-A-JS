class BMAxHeap {
    constructor(){
        this.store = [null];
    }

    swim(k){
        while (k > 1 && this.less(Math.floor(k / 2), k)){
            this.exch(k, Math.floor(k /2));
            k = Math.floor(k / 2);
        }
    }

    insert(el) {
        this.store.push(el);
        this.swim(this.store.length - 1);
    }

    less(i, j){
        return this.store[i] < this.store[j];
    }

    exch(i, j){
        let temp = this.store[i];
        this.store[i] = this.store[j];
        this.store[j] = temp;
    }
}

let myPQ = new BMAxHeap();

myPQ.insert(5);
myPQ.insert(10);
myPQ.insert(2);
myPQ.insert(6);
myPQ.insert(8);
myPQ.insert(12);

console.log(myPQ);