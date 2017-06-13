const Graph = require("./graph.js");
const Vertex = require("./Vertex.js");
let graph = new Graph();
let node1 = new Vertex(5);
graph.addVertex(node1);
console.log(graph);