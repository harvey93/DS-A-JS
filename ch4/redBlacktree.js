class rbNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
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
}