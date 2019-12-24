export const StartFlow = ({nodes, edges}) => {
  return edges
    .filter(edge => edge.from === '1')
    .reduce((sum, edge) => sum + +edge.weight.split('.')[1], 0);
};

export const GraphMin = ({nodes, edges}) => {
  let nEdges = [];
  edges.forEach(edge => {
    let w = edge.weight.split('.');
    if (w[0] !== w[1]) {
      nEdges.push({from: edge.from, to: edge.to, weight: w[0] - w[1]});
    }
  });

  return {nodes, edges: nEdges};
};

export const WeightGraphToMatrix = ({nodes, edges}) => {
  let DMatrix = new Array(nodes.length).fill([]);
  DMatrix = DMatrix.map(arr => new Array(nodes.length).fill(0));

  edges.forEach(item => {
    DMatrix[nodes.indexOf(item.from)][nodes.indexOf(item.to)] = item.weight;
  });
  return {matrix: DMatrix, nodes};
};

export const FordFulkerson = (graph, source, sink, nodes) => {
  const ROW = graph.length;
  let parent = new Array(ROW).fill(-1);
  let max_flow = 0;
  //
  let i = 0,
    paths = [];
  //

  while (BFS(graph, source, sink, parent)) {
    let path_flow = Infinity;
    let s = sink;
    while (s != source) {
      path_flow = Math.min(path_flow, graph[parent[s]][s]);
      s = parent[s];
    }
    max_flow += path_flow;

    let v = sink;
    //
    paths.push({path: [], flow: 0});
    //
    while (v != source) {
      let u = parent[v];
      graph[u][v] -= path_flow;
      //graph[v][u] += path_flow;
      paths[i].path.push(nodes[v]);
      v = parent[v];
    }
    paths[i].path.push(nodes[v]);
    paths[i].flow = path_flow;
    i++;
  }

  console.log(paths);
  return [max_flow, paths];
};

const BFS = (graph, s, t, parent) => {
  let ROW = graph.length;
  let visited = new Array(ROW).fill(false);
  let queue = [];
  queue.push(s);
  visited[s] = true;
  while (queue.length) {
    let u = queue.shift();
    graph[u].forEach((el, i) => {
      if (!visited[i] && el > 0) {
        queue.push(i);
        visited[i] = true;
        parent[i] = u;
      }
    });
  }
  return visited[t];
};
