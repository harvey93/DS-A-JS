// class Vertex {
//   constructor(value) {
//     this.value = value;
//     this.inEdges = [];
//     this.outEdges = [];
//   }
// }
//
// class Edge {
//   constructor(fromVert, toVert, cost = 1) {
//     this.fromVert = fromVert;
//     this.toVert = toVert;
//     this.cost = cost;
//
//     toVert.inEdges.push(this);
//     fromVert.outEdges.push(this);
//   }
//
//   destroy(){
//     let inIndex = this.toVert.inEdges.indexOf(this);
//     let outIndex = this.fromVert.outEdges.indexOf(this);
//     this.toVert.inEdges.splice(inIndex);
//     this.fromVert.outEdges.splice(outIndex);
//     this.toVert = null;
//     this.fromVert = null;
//   }
//
//
// }
//
// // self.to_vertex.in_edges.delete(self)
// // self.to_vertex = nil
// // self.from_vertex.out_edges.delete(self)
// // self.from_vertex = nil

class Vertex {
  constructor(label) {
    this.label = label;
    this.wasVisited = false;
  }
}


class Graph {
  constructor() {
    this.maxVerts = 9;
    this.vertList = [];
    this.vertMatrix = this.buildMatrix();
  }

  dfs(end){
    let stack = [];
    stack.push(this.vertList[0]);
    while (!end.wasVisited) {
      let current = stack[stack.length - 1];
      current.wasVisited = true;
      let i = this.vertList.indexOf(current);
      this.vertMatrix[i].forEach((el, j) => {
        if(el !== 0){
          stack.push(this.vertList[j]);
        }
      });
    }
    console.log();
  }

  buildMatrix(){
    let arr = [];
    for (let i = 0; i < this.maxVerts; i++) {
      arr.push([]);
    }
    arr.forEach(el => {
      for (let i = 0; i < this.maxVerts; i++) {
        arr[i].push(0);
      }
    });
    return arr;
  }

  addVertex(vertex){
    this.vertList.push(vertex);
  }

  addEdge(vert1, vert2){
    let vert1Idx = this.vertList.indexOf(vert1);
    let vert2Idx = this.vertList.indexOf(vert2);
    this.vertMatrix[vert1Idx][vert2Idx] = 1;
  }
}


let node1 = new Vertex("A");
let node2 = new Vertex("B");
let node3 = new Vertex("C");

let node4 = new Vertex("D");
let node5 = new Vertex("E");
let node6 = new Vertex("F");

let node7 = new Vertex("G");
let node8 = new Vertex("H");
let node9 = new Vertex("I");

let graph = new Graph();

graph.addVertex(node1);
graph.addVertex(node2);
graph.addVertex(node3);
graph.addVertex(node4);
graph.addVertex(node5);
graph.addVertex(node6);
graph.addVertex(node7);
graph.addVertex(node8);
graph.addVertex(node9);

graph.addEdge(node1, node2); //A -> B
graph.addEdge(node1, node3); //A -> C
graph.addEdge(node1, node4); //A -> D
graph.addEdge(node1, node5); //A -> E


graph.addEdge(node2, node6); //B -> F

graph.addEdge(node6, node8); //F -> H

graph.addEdge(node4, node7); //D -> G

graph.addEdge(node7, node9); //G -> I

graph.dfs();
