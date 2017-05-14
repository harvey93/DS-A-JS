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



// let node1 = new Vertex("A");
// let node2 = new Vertex("B");
// let node3 = new Vertex("C");
//
// let node4 = new Vertex("D");
// let node5 = new Vertex("E");
// let node6 = new Vertex("F");
//
//
// graph.addVertex(node1);
// graph.addVertex(node2);
// graph.addVertex(node3);
// graph.addVertex(node4);
// graph.addVertex(node5);
// graph.addVertex(node6);

// graph.addWeightedEdge(node1, node2, 6); //A -> B
// graph.addWeightedEdge(node1, node4, 4); //A -> D
//
// graph.addWeightedEdge(node2, node3, 10); //B -> C
// graph.addWeightedEdge(node2, node4, 7); //B -> D
// graph.addWeightedEdge(node2, node5, 7); //B -> E
//
// graph.addWeightedEdge(node3, node4, 8); //C -> D
// graph.addWeightedEdge(node3, node5, 5); //C -> E
// graph.addWeightedEdge(node3, node6, 6); //C -> F
//
// graph.addWeightedEdge(node4, node5, 12); //D -> E
//
// graph.addWeightedEdge(node5, node6, 7); //E -> F

// console.log(graph.vertMatrix);
// graph.wmst();
