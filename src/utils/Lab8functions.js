export const MinKruskalsTree = ({nodes, edges}) => {
  let edgesVector = getEdges({nodes, edges});
  edgesVector = edgesVector.sort((a, b) => a[2] - b[2]);
  let kruskal = KruskalsAlgorithm(edgesVector, nodes);
  return [OrToNorGraph({edges: kruskal[0], nodes}), kruskal[1]];
};

export const MaxKruskalsTree = ({nodes, edges}) => {
  let edgesVector = getEdges({nodes, edges});
  edgesVector = edgesVector.sort((a, b) => b[2] - a[2]);
  let kruskal = KruskalsAlgorithm(edgesVector, nodes);
  return [OrToNorGraph({edges: kruskal[0], nodes}), kruskal[1]];
};

export const PrimsAlgorithm = (W, nodes) => {
  let resultEdges = [];

  let dist = new Array(W.length).fill(Infinity);
  dist[0] = 0;
  let used = new Array(W.length).fill(false);
  let ans = 0;
  let sel_e = new Array(W.length).fill(-1);

  for (let i = 0; i < W.length; i++) {
    let u;
    let min_dist = Infinity;
    for (let j = 0; j < W.length; j++) {
      if (!used[j] && dist[j] < min_dist) {
        min_dist = dist[j];
        u = j;
      }
    }
    ans += min_dist;
    used[u] = true;
    if (sel_e[u] !== -1) {
      resultEdges.push({from: nodes[u], to: nodes[sel_e[u]], weight: min_dist});
      resultEdges.push({to: nodes[u], from: nodes[sel_e[u]], weight: min_dist});
    }

    for (let v = 0; v < W.length; v++) {
      if (+W[u][v] < dist[v]) {
        dist[v] = +W[u][v];
        sel_e[v] = u;
      }
    }
  }
  return [{nodes, edges: resultEdges}, ans];
};

const KruskalsAlgorithm = (edgesVector, nodes) => {
  let edgesResult = [];
  let Comp = new Array(nodes.length);
  for (let i = 0; i < Comp.length; i++) {
    Comp[i] = i;
  }
  let Ans = 0;
  for (let [from, to, weight] of edgesVector) {
    if (Comp[from] !== Comp[to]) {
      Ans += weight;
      let a = Comp[from];
      let b = Comp[to];
      edgesResult.push({
        from: nodes[from],
        to: nodes[to],
        weight: weight.toString()
      });
      for (let i = 0; i < nodes.length; i++) {
        if (Comp[i] === b) {
          Comp[i] = a;
        }
      }
    }
  }
  return [edgesResult, Ans];
};

const getEdges = ({nodes, edges}) => {
  let edgesVector = edges.map(el => [
    nodes.indexOf(el.from),
    nodes.indexOf(el.to),
    +el.weight
  ]);

  for (let i = 0; i < edgesVector.length; i++) {
    for (let j = 0; j < edgesVector.length; j++) {
      if (
        edgesVector[i][0] === edgesVector[j][1] &&
        edgesVector[i][1] === edgesVector[j][0]
      ) {
        edgesVector.splice(i, 1);
        j = 0;
      }
    }
  }

  return edgesVector;
};

export const OrToNorGraph = graph => ({
  nodes: graph.nodes,
  edges: graph.edges.reduce(
    (acc, cur) =>
      acc.concat([cur, {from: cur.to, to: cur.from, weight: cur.weight}]),
    []
  )
});

export const WeightedGrapToOutput = matrix =>
  matrix.map(ar => ar.map(el => (el === Infinity ? '\u221e' : el)));
