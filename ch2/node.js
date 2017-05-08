class Node {
  constructor(val = null) {
    this.next = null;
    this.val = val;
  }

  toString(){
    console.log({val: this.val, next: this.next});
  }

}

// let node1 = new Node(5);
// let node2 = new Node(5);
//
// if (node1.val === node2.val) {
//   console.log(true);
// }

module.exports = Node;

// let node1 = new Node(11);
// let node2 = new Node(12);
// let node3 = new Node(13);
// let node4 = new Node(15);
// let node5 = new Node(16);
// let node6 = new Node(17);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;

// let currentNode = node1;
//
// while (currentNode) {
//   currentNode.toString();
//   currentNode = currentNode.next;
// }
