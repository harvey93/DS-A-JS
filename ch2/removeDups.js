const Node = require('./node.js');



let node1 = new Node(11);
let node2 = new Node(12);
let node3 = new Node(13);
let node4 = new Node(15);
let node5 = new Node(16);
let node6 = new Node(17);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
