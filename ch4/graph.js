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

const Vertex = require("./Vertex.js");


class Graph {
  constructor() {
    this.maxVerts = 9;
    this.vertList = [];
    this.vertMatrix = this.buildMatrix();
  }

  dfs(start, end){
    let stack = [];
    start.wasVisited = true;
    stack.push(start);
    while (stack.length !== 0) {
      let peek = stack[stack.length - 1];
      let adjVertexI = this.getAdjUnvisitedVertex(this.vertList.indexOf(peek));

      if (adjVertexI === -1) {
        stack.pop();
      }else{
        let adjVert = this.vertList[adjVertexI];
        adjVert.wasVisited = true;
        stack.push(adjVert);
        if (adjVert.label === end.label) {break;}
      }

    }
    if (stack.length === 0) {
      return false;
    }
    this.resetList();
    console.log(stack);
  }

  bfs(start, end){
    let res = false;
    let queue = [];
    start.wasVisited = true;
    queue.unshift(start);
    while(queue.length !== 0){
      let peek = queue[0];
      let adjVertexI = this.getAdjUnvisitedVertex(this.vertList.indexOf(peek));
      if (adjVertexI === -1){
        queue.shift();
      }else {
        let adjVert = this.vertList[adjVertexI];
        adjVert.wasVisited = true;
        queue.push(adjVert);
        if (adjVert.label === end.label) {
          res = true;
          break;
        }
      }
    }
    this.resetList();
    return res;
  }

  mst(){
    let stack = [];
    stack.push(this.vertList[0]);
    stack[0].wasVisited = true;
    while (stack.length !== 0) {
      let peek = stack[stack.length - 1];
      let adjVertexI = this.getAdjUnvisitedVertex(this.vertList.indexOf(peek));
      if (adjVertexI === -1) {
        stack.pop();
      }else {
        let adjVert = this.vertList[adjVertexI];
        adjVert.wasVisited = true;
        stack.push(adjVert);
        if (stack.length === this.vertList.length) {
          break;
        }
      }
    }
    this.resetList();
    return stack;
  }

  topoSort(){
    let sorted = [];
    while (this.vertList.length !== 0) {
      let vertIndex = this.noSuccessors();
      sorted.push(this.vertList[vertIndex]);
      this.deleteVertex(vertIndex);
    }
    console.log(sorted);
  }

  deleteVertex(index){
    this.vertList.splice(index, 1);
    this.vertMatrix.splice(index, 1);
    this.vertMatrix.forEach(el => {
      el.splice(index, 1);
    });
  }

  noSuccessors(){
    let res = -1;
    for (let i = 0; i < this.vertMatrix.length; i++) {
      if(this.vertMatrix.every(el => el[i] === 0)){
        res = i;
        break;
      }
    }
    return res;
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

module.exports = Graph;


// let node1 = new Vertex("A");
// let node2 = new Vertex("B");
// let node3 = new Vertex("C");

// let node4 = new Vertex("D");
// let node5 = new Vertex("E");
// let node6 = new Vertex("F");

// let node7 = new Vertex("G");
// let node8 = new Vertex("H");
// let node9 = new Vertex("I");

// let graph = new Graph();



// graph.addVertex(node1);
// graph.addVertex(node2);
// graph.addVertex(node3);
// graph.addVertex(node4);
// graph.addVertex(node5);
// graph.addVertex(node6);
// graph.addVertex(node7);
// graph.addVertex(node8);
// graph.addVertex(node9);


// graph.addEdge(node1, node4); //A -> D
// graph.addEdge(node1, node5); //A -> E
//
// graph.addEdge(node2, node5); //B -> E
//
// graph.addEdge(node3, node6); //C -> F
//
// graph.addEdge(node4, node7); //D -> G
//
// graph.addEdge(node5, node7); //E -> G
//
// graph.addEdge(node6, node8); //F -> H
//
// graph.addEdge(node7, node8); //G -> H

// graph.addEdge(node4, node1); //A -> D
// graph.addEdge(node5, node1); //A -> E

// graph.addEdge(node5, node2); //B -> E

// graph.addEdge(node6, node3); //C -> F

// graph.addEdge(node7, node4); //D -> G

// graph.addEdge(node7, node5); //E -> G

// graph.addEdge(node8, node6); //F -> H

// graph.addEdge(node8, node7); //G -> H

// graph.topoSort();
// graph.addEdge(node1, node2); //A -> B
// graph.addEdge(node1, node3); //A -> C
// graph.addEdge(node1, node4); //A -> D
// graph.addEdge(node1, node5); //A -> E
//
//
// graph.addEdge(node2, node3); //B -> C
// graph.addEdge(node2, node4); //B -> D
// graph.addEdge(node2, node5); //B -> E
//
// graph.addEdge(node3, node4); //C -> D
// graph.addEdge(node3, node5); //C -> E
//
// graph.addEdge(node4, node5); //D -> E

// console.log(graph.mst());



// graph.addEdge(node1, node2); //A -> B
// graph.addEdge(node1, node3); //A -> C
// graph.addEdge(node1, node4); //A -> D
// graph.addEdge(node1, node5); //A -> E
//
//
// graph.addEdge(node2, node6); //B -> F
//
// graph.addEdge(node6, node8); //F -> H
//
// graph.addEdge(node4, node7); //D -> G
//
// graph.addEdge(node7, node9); //G -> I

// graph.dfs(node1, node9);
// console.log(graph.bfs(node2, node8));
// console.log(graph.getAdjUnvisitedVertex(1));
// console.log(graph.getVertI(node8));
