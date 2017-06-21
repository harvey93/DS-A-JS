class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.back = null;
    }
}

class LinkedList {
    constructor() {
        this.root = new Node('root');
        this.tail = new Node('tail');
    }
}

class Cache {
    constructor(max){
        this.map = {};
        this.list = new LinkedList();
        this.max = max;
    }

    insert(val) {
        if(this.map[val]) {
            // return true;
            this.update(val);
        } else {
            // return false;
            this.add(val);
        }
    }

    add() {

    }

    update(){

    }
    
    mapSize() {
        return Object.keys(this.map).length;
    }
}

let cache = new Cache(3);
console.log(cache.insert());