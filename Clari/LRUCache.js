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
        this.root.next = this.tail;
        this.tail.back = this.root;
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
            this.eject();
            this.add(val);
        }
    }

    read(val){
        return this.map[val];
    }

    eject(){
        if(this.mapSize() >= this.max) {
            let head = this.list.root;
            let oldNext = head.next;
            let newNext = oldNext.next;
            head.next = newNext;
            newNext.back = head;
            delete this.map[`${oldNext.data}`];
        }
    }

    add(val) {
        let newNode = new Node(val);
        this.map[val] = newNode;
        let tail = this.list.tail;
        let oldPrev = tail.back;
        oldPrev.next = newNode;
        newNode.back = oldPrev;
        newNode.next = tail;
        tail.back = newNode;
    }

    update(val){
        let currentNode = this.map[val];
        currentNode.back.next = currentNode.next;
        currentNode.next.back = currentNode.back;
        this.add(val);
    }

    mapSize() {
        return Object.keys(this.map).length;
    }
}

let cache = new Cache(3);
cache.insert(10);
cache.insert(12);
cache.insert(15);
cache.insert(18);
cache.insert(25);
cache.insert(15);
// console.log(cache.list.root.next);
console.log(cache.read(15));