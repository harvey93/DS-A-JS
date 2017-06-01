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

    static singleRotation(root, dir){
        let otherDir = dir === 0 ? 1 : 0;
        let newRoot = root.subtrees[otherDir];

        root.subtrees[otherDir] = newRoot.subtrees[dir];
        newRoot.subtrees[dir] = root;

        return newRoot;
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

    printArr(node = this.root, arr = []) {
        arr.push(node.value);
        if(node.subtrees[0]) {
            this.printArr(node.subtrees[0], arr);
        }else {
            arr.push("X");
        }

        if(node.subtrees[1]) {
            this.printArr(node.subtrees[1], arr);
        } else {
            arr.push("X");
        }

        return arr;
    }
    
}

let myTree = new AVLTree();

myTree.insert(3);
myTree.insert(5);
myTree.insert(6);
myTree.insert(4);

// console.log(myTree.root);

// AVLTree.singleRotation(myTree.root, 0);

console.log(myTree.printArr());

    // 3                           5
    //     5           =>      3       6
    // 4       6                     4