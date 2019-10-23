const GraphToMatrix = ({nodes, edges}) => {
  let adj = new Array(nodes.length).fill([]);
  adj = adj.map(arr => new Array(nodes.length).fill(0));

  edges.forEach(item => {
    adj[nodes.indexOf(item.from)][nodes.indexOf(item.to)] += 1;
  });

  return adj;
};

export const MatrixUnion = (Amatrix, Bmatrix) => {
  let nodes = [...Amatrix.nodes, ...Bmatrix.nodes];
  nodes = nodes.filter((item, pos) => nodes.indexOf(item) === pos);

  let edges = Amatrix.edges.map(el => Object.assign({}, el));
  for (let i = 0; i < Bmatrix.edges.length; i++) {
    let isEq = false;
    for (let j = 0; j < edges.length; j++) {
      if (
        edges[j].from === Bmatrix.edges[i].from &&
        edges[j].to === Bmatrix.edges[i].to
      ) {
        isEq = true;
      }
    }
    if (!isEq) {
      edges.push(Bmatrix.edges[i]);
    }
  }

  return GraphToMatrix({nodes, edges});
};

export const MatrixIntersection = (Amatrix, Bmatrix) => {};

export const MatrixCompound = (Amatrix, Bmatrix) => {
  if (Bmatrix.length > Amatrix.length) {
    [Amatrix, Bmatrix] = [Bmatrix, Amatrix];
  }

  let union = MatrixUnion(Amatrix, Bmatrix);
  for (let i = Bmatrix.length - 1; i < Amatrix.length; i++) {
    for (let j = 0; j < Bmatrix.length; j++) {
      union[i][j] = '1';
    }
  }
};
