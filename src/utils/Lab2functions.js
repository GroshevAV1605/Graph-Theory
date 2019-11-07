export const MatrixUnion = (Amatrix, Bmatrix) =>
  GraphToMatrix(GraphUnion(Amatrix, Bmatrix));

export const MatrixIntersection = (Amatrix, Bmatrix) =>
  GraphToMatrix(GraphIntersection(Amatrix, Bmatrix));

export const MatrixCompound = (Amatrix, Bmatrix) =>
  GraphToMatrix(GraphCompound(Amatrix, Bmatrix));

export const MatrixRingAmount = (Amatrix, Bmatrix) =>
  GraphToMatrix(GraphRingAmount(Amatrix, Bmatrix));

export const MatrixCartesian = (Amatrix, Bmatrix) =>
  GraphToMatrix(GraphCartesianProduct(Amatrix, Bmatrix));

export const GraphToMatrix = ({nodes, edges}) => {
  let adjMatrix = new Array(nodes.length).fill([]);
  adjMatrix = adjMatrix.map(arr => new Array(nodes.length).fill(0));

  edges.forEach(item => {
    adjMatrix[nodes.indexOf(item.from)][nodes.indexOf(item.to)] += 1;
  });

  return {adjMatrix, nodes};
};

const GraphUnion = (Amatrix, Bmatrix) => {
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
  return {nodes, edges};
};

const GraphIntersection = (Amatrix, Bmatrix) => {
  let nodes = Amatrix.nodes.filter(node => Bmatrix.nodes.includes(node));
  let edges = Amatrix.edges.filter(edge => {
    for (let i = 0; i < Bmatrix.edges.length; i++) {
      if (
        edge.from === Bmatrix.edges[i].from &&
        edge.to === Bmatrix.edges[i].to
      ) {
        return true;
      }
    }
    return false;
  });
  return {nodes, edges};
};

const GraphCompound = (Amatrix, Bmatrix) => {
  let union = GraphUnion(Amatrix, Bmatrix);
  Amatrix.nodes.forEach((Anode, i) => {
    Bmatrix.nodes.forEach((Bnode, j) => {
      if (Anode === Bnode) {
        return;
      }
      if (!union.edges.some(edge => edge.from === Anode && edge.to === Bnode)) {
        union.edges.push({from: Anode, to: Bnode});
      }
      if (!union.edges.some(edge => edge.from === Bnode && edge.to === Anode)) {
        union.edges.push({from: Bnode, to: Anode});
      }
    });
  });

  return union;
};

const GraphRingAmount = (Amatrix, Bmatrix) => {
  let union = GraphUnion(Amatrix, Bmatrix);
  let {edges} = GraphIntersection(Amatrix, Bmatrix);

  union.edges = union.edges.filter(Uedge => {
    return !edges.some(
      edge => edge.from === Uedge.from && edge.to === Uedge.to
    );
  });

  return union;
};

const GraphCartesianProduct = (Amatrix, Bmatrix) => {
  let nodes = Amatrix.nodes.reduce(
    (sum, Anode) => sum.concat(Bmatrix.nodes.map(Bnode => Anode + Bnode)),
    []
  );
  let edges = [];

  nodes.forEach(Fnode =>
    nodes.forEach(Snode => {
      let [u, uT] = Fnode.split('');
      let [v, vT] = Snode.split('');
      if ((u === v) & (uT === vT)) return;
      if (
        (u === v) &
        Bmatrix.edges.some(edge => (edge.from === uT) & (edge.to === vT))
      ) {
        edges.push({from: Fnode, to: Snode});
      }

      if (
        (uT === vT) &
        Amatrix.edges.some(edge => (edge.from === u) & (edge.to === v))
      ) {
        edges.push({from: Fnode, to: Snode});
      }
    })
  );

  return {nodes, edges};
};
