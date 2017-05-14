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
