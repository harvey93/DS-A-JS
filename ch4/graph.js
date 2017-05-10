class Vertex {
  constructor(value) {
    this.value = value;
    this.inEdges = [];
    this.outEdges = [];
  }
}

class Edge {
  constructor(fromVert, toVert, cost = 1) {
    this.fromVert = fromVert;
    this.toVert = toVert;
    this.cost = cost;

    toVert.inEdges.push(this);
    fromVert.outEdges.push(this);
  }

  destroy(){
    let inIndex = this.toVert.inEdges.indexOf(this);
    let outIndex = this.fromVert.outEdges.indexOf(this);
    this.toVert.inEdges.splice(inIndex);
    this.fromVert.outEdges.splice(outIndex);
    this.toVert = null;
    this.fromVert = null;
  }


}

// self.to_vertex.in_edges.delete(self)
// self.to_vertex = nil
// self.from_vertex.out_edges.delete(self)
// self.from_vertex = nil
