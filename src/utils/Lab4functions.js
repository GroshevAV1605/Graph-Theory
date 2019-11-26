import {CountMatrixC} from './Lab1functions';

export const IncMatrixFromList = (graph, isOrgraph = true) => {
  let IncMatrix = new Array(graph.nodes.length).fill([]);
  IncMatrix = IncMatrix.map(arr => new Array(graph.edges.length).fill(0));

  if (isOrgraph) {
    graph.edges.forEach((edge, i) => {
      IncMatrix[graph.nodes.indexOf(edge.from)][i] = -1;
      IncMatrix[graph.nodes.indexOf(edge.to)][i] = 1;
    });
  } else {
    graph.edges.forEach((edge, i) => {
      IncMatrix[graph.nodes.indexOf(edge.from)][i] = 1;
      IncMatrix[graph.nodes.indexOf(edge.to)][i] = 1;
    });
  }

  return IncMatrix;
};

export const ReachabilityMatrix = matrix => {
  let Cmatrix = CountMatrixC(matrix, matrix.length - 1);
  return Cmatrix.map((arr, i) => arr.map((el, j) => (el || i == j ? 1 : 0)));
};

export const StrConnMatrix = matrix => {
  let matrixT = matrix[0].map((col, i) => matrix.map(row => row[i]));
  return matrix.map((arr, i) => arr.map((el, j) => el * matrixT[i][j]));
};

export const ConnectivityComponent = (matrix, nodes, adj) => {
  let freeNodes = [...nodes.keys()];
  let components = [];
  let index = 0;

  while (freeNodes.length) {
    components.push([]);
    matrix[freeNodes[0]].forEach((el, i) => {
      if (el === 1) {
        components[index].push(i);
      }
    });
    freeNodes = freeNodes.filter(n => !components[index].includes(n));
    index++;
  }

  let compMatrix = matrix.map((arr, i) => arr.map((el, j) => el * adj[i][j]));
  let compAdj = components.map(component => {
    let adjMatrix = compMatrix.filter((arr, i) => component.includes(i));
    adjMatrix = adjMatrix.map(arr =>
      arr.filter((el, j) => component.includes(j))
    );
    return {adjMatrix, nodes: component.map(el => nodes[el])};
  });

  return {compMatrix, compAdj};
};

export const getSubgraph = (graph, InclusionNodes) => {};
