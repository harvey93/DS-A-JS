class rbNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.color = false;
    }
}

class rbTree {
    constructor(){
        this.root = null;
    }

    getVal(val) {
        let currentNode = this.root;
        while(currentNode) {
            if(currentNode.data < val) {
                currentNode = currentNode.left;
            }else if (currentNode.data > val){
                currentNode = currentNode.right;
            } else {
                return currentNode;
            }
        }
        return null;
    }

    rotateLeft(h){
        let x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = true;
        return x;
    }

    rotateRight(h){
        let x = h.left;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = true;
        return x;
    }

    flipColors(h){
        h.color = true;
        h.left.color = false;
        h.right.color = false;
    }
}