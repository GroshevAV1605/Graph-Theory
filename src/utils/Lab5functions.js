export const WeightGraphToMatrix = ({nodes, edges}) => {
  let DMatrix = new Array(nodes.length).fill([]);
  DMatrix = DMatrix.map(arr => new Array(nodes.length).fill(Infinity));
  DMatrix.forEach((item, i) => (DMatrix[i][i] = 0));

  edges.forEach(item => {
    DMatrix[nodes.indexOf(item.from)][nodes.indexOf(item.to)] = item.weight;
  });

  return {matrix: DMatrix, nodes};
};

export const FloydWarshell = Dmatrix => {
  let n = Dmatrix.length;
  let DmMatrix = Dmatrix.map(arr => [...arr]);
  for (let i = 0; i < n; i++) {
    for (let u = 0; u < n; u++) {
      for (let v = 0; v < n; v++) {
        DmMatrix[u][v] = Math.min(
          DmMatrix[u][v],
          DmMatrix[u][i] + DmMatrix[i][v]
        );
      }
    }
  }

  return DmMatrix;
};

export const ShortestRoutes = ({matrix, nodes}) => {};
