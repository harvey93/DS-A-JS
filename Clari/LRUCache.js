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
}

let cache = new Cache();
console.log(cache);