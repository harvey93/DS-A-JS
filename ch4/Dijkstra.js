const Vertex = require("./Vertex.js");

class Graph {
  constructor() {
    this.maxVerts = 6;
    this.vertList = [];
    this.vertMatrix = this.buildMatrix();
  }

  resetList(){
    this.vertList.forEach(el => {
      el.wasVisited = false;
    });
  }



  getAdjUnvisitedVertex(listI){
    let res = -1;
    let row = this.vertMatrix[listI];
    for (let i = 0; i < row.length; i++) {
      let currentNode = this.vertList[i];
      if (row[i] !== 0 && !currentNode.wasVisited) {
        res = i;
        break;
      }
    }
    return res;
  }

  getVertI(node){
    return this.vertList.indexOf(node);
  }

  buildMatrix(){
    let arr = [];
    for (let i = 0; i < this.maxVerts; i++) {
      arr.push([]);
    }
    arr.forEach(el => {
      for (let i = 0; i < this.maxVerts; i++) {
        arr[i].push(Infinity);
      }
    });
    return arr;
  }

  addVertex(vertex){
    this.vertList.push(vertex);
  }

  addEdge(vert1, vert2, cost){
    let vert1Idx = this.vertList.indexOf(vert1);
    let vert2Idx = this.vertList.indexOf(vert2);
    this.vertMatrix[vert1Idx][vert2Idx] = cost;
  }
}

let node1 = new Vertex("A");
let node2 = new Vertex("B");
let node3 = new Vertex("C");

let node4 = new Vertex("D");
let node5 = new Vertex("E");

let graph = new Graph();


graph.addVertex(node1);
graph.addVertex(node2);
graph.addVertex(node3);
graph.addVertex(node4);
graph.addVertex(node5);

graph.addEdge(node1, node2, 50); //A -> B
graph.addEdge(node1, node2, 80); //A -> D

graph.addEdge(node2, node3, 60); //B -> C
graph.addEdge(node2, node4, 90); //B -> D


graph.addEdge(node3, node5, 40); //C -> E

graph.addEdge(node4, node3, 20); //D -> C
graph.addEdge(node4, node5, 70); //D -> E

graph.addEdge(node5, node2, 50); //E -> B


console.log(graph);