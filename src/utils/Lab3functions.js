import {GraphToMatrix} from './Lab2functions';

export const DistanceMatrix = graph => {
  let matrix = GraphToMatrix(graph);
  let Dmatrix = matrix.adjMatrix.map((item, i) => bfs(matrix.adjMatrix, i)[0]);
  console.log(Dmatrix);
  console.log(matrix.adjMatrix);
  return {Dmatrix, nodes: matrix.nodes};
};

export const GraphRadius = (Dmatrix, nodes) => {
  let eccentricity = Dmatrix.map(line => Math.max(...line));
  let radius = Math.min(...eccentricity);
  let centerNodes = nodes.filter((node, i) => radius === eccentricity[i]);

  return {radius, centerNodes};
};

export const GraphDiameter = (Dmatrix, nodes) => {
  let eccentricity = Dmatrix.map(line => Math.max(...line));
  let diameter = Math.max(...eccentricity);
  let peripheryNodes = nodes.filter((node, i) => diameter === eccentricity[i]);

  return {diameter, peripheryNodes};
};

export const BuildGraphCenter = (graph, centerNodes) => {
  let edges = graph.edges.filter(
    el => centerNodes.includes(el.from) && centerNodes.includes(el.to)
  );
  return GraphToMatrix({nodes: centerNodes, edges});
};

export const BuildGraphPeriphery = (graph, peripheryNodes) => {
  let edges = graph.edges.filter(
    el => peripheryNodes.includes(el.from) && peripheryNodes.includes(el.to)
  );
  return GraphToMatrix({nodes: peripheryNodes, edges});
};

export const findPath = (graph, u, v) => {
  if (!graph.nodes.includes(u) || !graph.nodes.includes(v)) {
    return [];
  }
  let matrix = GraphToMatrix(graph);
  let path = bfs(
    matrix.adjMatrix,
    matrix.nodes.indexOf(u),
    matrix.nodes.indexOf(v)
  )[1];
  return path.map(item => matrix.nodes[item]);
};

const bfs = (adj, u, v) => {
  let queue = [];
  let used = new Array(adj.length).fill(false);
  let d = new Array(adj.length).fill(0);
  let p = [];
  queue.push(u);
  used[u] = true;

  while (queue.length) {
    let u = queue.shift();
    for (let i = 0; i < adj.length; i++) {
      if (adj[u][i] === 1 && !used[i]) {
        queue.push(i);
        used[i] = true;
        d[i] = d[u] + 1;
        p.push({begin: u, end: i});
      }
    }
  }

  let VUpath = [v];
  while (p.length) {
    let e = p.pop();
    if (e.end === v) {
      v = e.begin;
      VUpath.push(v);
    }
  }

  return [d, VUpath];
};

const n123 = () => [1, 2, 3];
