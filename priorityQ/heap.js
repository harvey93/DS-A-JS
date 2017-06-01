class BMAxHeap {
    constructor(){
        this.store = [null];
    }

    static heapSort(arr){
        let PQ = new BMAxHeap();
        let res = [];
        arr.forEach(el => PQ.insert(el));
        while(PQ.store.length > 1) {
            res.unshift(PQ.delMax());
        }
        return res;
    }

    swim(k){
        while (k > 1 && this.less(Math.floor(k / 2), k)){
            this.exch(k, Math.floor(k /2));
            k = Math.floor(k / 2);
        }
    }

    delMax(){
        let max = this.store[1];
        this.exch(1, this.store.length - 1);
        this.store.pop();
        this.sink(1);
        return max;
    }

    sink(k){
        while(2 * k <= this.store.length - 1){
            let j = 2 * k;
            if(j < this.store.length - 1 && this.less(j, j + 1)){
                j++;
            }
            if(!this.less(k, j)){
                break;
            }
            this.exch(k, j);
            k = j;
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

myPQ.delMax();
myPQ.delMax();

// console.log(myPQ);

let array = [5,2,1,5,6,76,87,32,15];

console.log(BMAxHeap.heapSort(array));
