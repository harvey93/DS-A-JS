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
    this.qArr.sort((a, b) => b - a);
  }

  removeMin(){
    return this.qArr.splice(this.qArr.length - 1, 1);
  }

  peek(){
    return this.qArr[this.qArr.length - 1];
  }

  size(){
    return this.qArr.length;
  }

  isEmpty(){
    return (this.size() === 0);
  }

  find(val){
    let res = -1;
    for (let i = 0; i < this.size(); i++) {
      if (this.qArr[i].cost === val) {
        res = i;
        break;
      }
    }
    return res;
  }

}

class Graph {
  constructor() {
    this.maxVerts = 6;
    this.vertList = [];
    this.vertMatrix = this.buildMatrix();
    this.pq = new PQ();
  }

  // dfs(start, end){
  //   let stack = [];
  //   start.wasVisited = true;
  //   stack.push(start);
  //   while (stack.length !== 0) {
  //     let peek = stack[stack.length - 1];
  //     let adjVertexI = this.getAdjUnvisitedVertex(this.vertList.indexOf(peek));
  //
  //     if (adjVertexI === -1) {
  //       stack.pop();
  //     }else{
  //       let adjVert = this.vertList[adjVertexI];
  //       adjVert.wasVisited = true;
  //       stack.push(adjVert);
  //       if (adjVert.label === end.label) {break;}
  //     }
  //
  //   }
  //   if (stack.length === 0) {
  //     return false;
  //   }
  //   this.resetList();
  //   console.log(stack);
  // }

  // bfs(start, end){
  //   let res = false;
  //   let queue = [];
  //   start.wasVisited = true;
  //   queue.unshift(start);
  //   while(queue.length !== 0){
  //     let peek = queue[0];
  //     let adjVertexI = this.getAdjUnvisitedVertex(this.vertList.indexOf(peek));
  //     if (adjVertexI === -1){
  //       queue.shift();
  //     }else {
  //       let adjVert = this.vertList[adjVertexI];
  //       adjVert.wasVisited = true;
  //       queue.push(adjVert);
  //       if (adjVert.label === end.label) {
  //         res = true;
  //         break;
  //       }
  //     }
  //   }
  //   this.resetList();
  //   return res;
  // }

  // mst(){
  //   let stack = [];
  //   stack.push(this.vertList[0]);
  //   stack[0].wasVisited = true;
  //   while (stack.length !== 0) {
  //     let peek = stack[stack.length - 1];
  //     let adjVertexI = this.getAdjUnvisitedVertex(this.vertList.indexOf(peek));
  //     if (adjVertexI === -1) {
  //       stack.pop();
  //     }else {
  //       let adjVert = this.vertList[adjVertexI];
  //       adjVert.wasVisited = true;
  //       stack.push(adjVert);
  //       if (stack.length === this.vertList.length) {
  //         break;
  //       }
  //     }
  //   }
  //   this.resetList();
  //   return stack;
  // }

  // topoSort(){
  //   let sorted = [];
  //   while (this.vertList.length !== 0) {
  //     let vertIndex = this.noSuccessors();
  //     sorted.push(this.vertList[vertIndex]);
  //     this.deleteVertex(vertIndex);
  //   }
  //   console.log(sorted);
  // }
  //
  // deleteVertex(index){
  //   this.vertList.splice(index, 1);
  //   this.vertMatrix.splice(index, 1);
  //   this.vertMatrix.forEach(el => {
  //     el.splice(index, 1);
  //   });
  // }

  // noSuccessors(){
  //   let res = -1;
  //   for (let i = 0; i < this.vertMatrix.length; i++) {
  //     if(this.vertMatrix.every(el => el[i] === 0)){
  //       res = i;
  //       break;
  //     }
  //   }
  //   return res;
  // }

  wmst(){

  }

  putInPQ(){
    
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
let node6 = new Vertex("F");

// let edge1 = new Edge (node1, node2, 6); //A -> B
// let edge2 = new Edge (node1, node4, 4); //A -> D
//
// let edge3 = new Edge (node2, node3, 10); //B -> C
// let edge4 = new Edge (node2, node4, 7); //B -> D
// let edge5 = new Edge (node2, node5, 7); //B -> E
//
// let edge6 = new Edge (node3, node4, 8); //C -> D
// let edge7 = new Edge (node3, node5, 5); //C -> E
// let edge8 = new Edge (node3, node6, 6); //C -> F
//
// let edge9 = new Edge (node4, node5, 12); //D -> E
//
// let edge10 = new Edge (node5, node6, 7); //E -> F

let graph = new Graph();

graph.addVertex(node1);
graph.addVertex(node2);
graph.addVertex(node3);
graph.addVertex(node4);
graph.addVertex(node5);
graph.addVertex(node6);

graph.addEdge(node1, node2, 6); //A -> B
graph.addEdge(node1, node4, 4); //A -> D

graph.addEdge(node2, node3, 10); //B -> C
graph.addEdge(node2, node4, 7); //B -> D
graph.addEdge(node2, node5, 7); //B -> E

graph.addEdge(node3, node4, 8); //C -> D
graph.addEdge(node3, node5, 5); //C -> E
graph.addEdge(node3, node6, 6); //C -> F

graph.addEdge(node4, node5, 12); //D -> E

graph.addEdge(node5, node6, 7); //E -> F

console.log(graph.vertMatrix);
console.log(graph.vertList);

// let pq = new PQ();
//
// pq.insert(edge1);
// pq.insert(edge2);
// pq.insert(edge3);
// pq.insert(edge4);
// pq.insert(edge5);
// pq.insert(edge6);
// pq.insert(edge7);
// pq.insert(edge8);
// pq.insert(edge9);
// pq.insert(edge10);


// console.log(pq);
// console.log(pq.find(6));

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
