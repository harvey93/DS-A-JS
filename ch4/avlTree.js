class AVLTreeNode {
    constructor(value){
        this.value = value;
        this.subtrees = [null, null];
    }
}

class AVLTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        this.root = AVLTree.insert(this.root, value);
    }

    static insert(node, value){
        if(node) {
            let dir = value < node.value ? 0 : 1;
            node.subtrees[dir] = AVLTree.insert(node.subtrees[dir], value);
            // Balancing Code
            return node;
        } else {
            return new AVLTreeNode(value);
        }
    }
}

let myTree = new AVLTree();

myTree.insert(3);
myTree.insert(4);
myTree.insert(5);
myTree.insert(6);

console.log(myTree);
