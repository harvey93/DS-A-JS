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
    this.maxVerts = 4;
    this.vertList = [];
    this.vertMatrix = this.buildMatrix();
  }

  buildMatrix(){
    let arr = [];
    for (let i = 0; i < this.maxVerts; i++) {
      arr.push([]);
    }
    // for (let i = 0; i < this.maxVerts; i++) {
    //   for (let j = 0; i < this.maxVerts; i++) {
    //     this.maxVerts[i].push(0);
    //   }
    // }
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

let graph = new Graph();

graph.addVertex(node1);
graph.addVertex(node2);
graph.addVertex(node3);
graph.addVertex(node4);

graph.addEdge(node1, node2);
graph.addEdge(node1, node3);
graph.addEdge(node3, node2);
graph.addEdge(node1, node4);
graph.addEdge(node3, node4);

console.log(graph.vertMatrix);
