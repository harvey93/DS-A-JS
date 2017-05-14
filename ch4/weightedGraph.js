class Vertex {
  constructor(label) {
    this.label = label;
    this.wasVisited = false;
  }
}

class Edge {
  constructor(sv, ev, cost) {
    this.srcVert = sv;
    this.endVert = ev;
    this.cost = cost;
  }
}

class PQ {
  constructor() {
     this.qArr = [];
  }

  insert(el){
    this.qArr.push(el);
    this.qArr.sort((a, b) => b.cost - a.cost);
  }

  removeMin(){
    return this.qArr.splice(this.qArr.length - 1, 1);
  }

  peek(){
    return this.qArr[this.qArr.length - 1];
  }
}

let node1 = new Vertex("A");
let node2 = new Vertex("B");
let node3 = new Vertex("C");

let node4 = new Vertex("D");
let node5 = new Vertex("E");
let node6 = new Vertex("F");

let edge1 = new Edge (node1, node2, 6); //A -> B
let edge2 = new Edge (node1, node4, 4); //A -> D

let edge3 = new Edge (node2, node3, 10); //B -> C
let edge4 = new Edge (node2, node4, 7); //B -> D
let edge5 = new Edge (node2, node5, 7); //B -> E

let edge6 = new Edge (node3, node4, 8); //C -> D
let edge7 = new Edge (node3, node5, 5); //C -> E
let edge8 = new Edge (node3, node6, 6); //C -> F

let edge9 = new Edge (node4, node5, 12); //D -> E

let edge10 = new Edge (node5, node6, 7); //E -> F


let pq = new PQ();

pq.insert(edge1);
pq.insert(edge2);
pq.insert(edge3);
pq.insert(edge4);
pq.insert(edge5);
pq.insert(edge6);
pq.insert(edge7);
pq.insert(edge8);
pq.insert(edge9);
pq.insert(edge10);


console.log(pq.peek());

//
//
// graph.addVertex(node1);
// graph.addVertex(node2);
// graph.addVertex(node3);
// graph.addVertex(node4);
// graph.addVertex(node5);
// graph.addVertex(node6);



// console.log(graph.vertMatrix);
// graph.wmst();
