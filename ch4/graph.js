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
    this.maxVerts = 10;
    this.vertList = [];
    this.vertMatrix = this.buildMatrix();
  }

  buildMatrix(){
    let arr = [];
    for (let i = 0; i < this.maxVerts; i++) {
      arr.push([]);
    }
    return arr;
  }

  addVertex(vertex){
    this.vertList.push(vertex);
  }

  addEdge(){

  }
}


let node1 = new Vertex("A");
let node2 = new Vertex("B");

let graph = new Graph();

graph.addVertex(node1);
graph.addVertex(node2);

console.log(graph);
