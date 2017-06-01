class unMinPQ {
    constructor(){
        this.store = [];
    }

    insert(val) {
        this.store.push(val);
    }

    remMax(){
        let maxI = this.getMaxIdx();
        this.store.splice(maxI, 1);
    }

    getMaxIdx(){
        let currentMax = this.store[0];
        let currentMaxI = 0;
        this.store.forEach((el, idx) => {
            if(el > currentMax){
                currentMax = el;
                currentMaxI = idx;
            }
        });
        return currentMaxI;
    }
}

let myPQ = new unMinPQ();

myPQ.insert(5);
myPQ.insert(1);
myPQ.insert(15);
myPQ.insert(2);
myPQ.insert(0);

myPQ.remMax();
myPQ.remMax();
myPQ.remMax();

console.log(myPQ);


