class BMAxHeap {
    constructor(){
        this.store = [];
    }

    swim(k){
        while (k > 1 && this.less(k / 2, k)){
            exch(k, k /2);
            k = Math.floor(k / 2);
        }
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

const exch = (arr, i, j ) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
};
