export const isEuler = (adjMarix, isOrgraph) => {
  if (!isConn(adjMarix)) {
    return 0;
  }

  let OddVertex = 0;
  adjMarix.forEach((ar, i) => {
    if (findDegrees(adjMarix, i, isOrgraph)) {
      OddVertex++;
    }
  });
  if (OddVertex > 2) return 0;
  if (OddVertex == 0) return 2;
  return 1;
};

export const isConn = adj => {
  function dfs(u, visited) {
    let visitedVerices = 1;
    visited[u] = true;
    adj[u].forEach((el, i) => {
      if (el && !visited[i]) {
        visitedVerices += dfs(i, visited);
      }
    });
    return visitedVerices;
  }
  let vvs = dfs(0, new Array(adj.length).fill(false));
  return vvs === adj.length;
};

export const findEulerPath = (adj, nodes, isOrgraph) => {
  let path = [];
  let Ematrix = adj.map(arr => [...arr]);
  let v = 0;
  adj.forEach((arr, i) => {
    if (findDegrees(adj, i, isOrgraph)) {
      v = i;
    }
  });
  let S = [v];
  while (S.length) {
    let w = S[S.length - 1];
    for (let i = 0; i < adj.length; i++) {
      if (Ematrix[w][i]) {
        S.push(i);
        Ematrix[w][i]--;
        if (!isOrgraph) {
          Ematrix[i][w]--;
        }
        break;
      }
    }
    if (w == S[S.length - 1]) {
      S.pop();
      path.push(nodes[w]);
    }
  }
  return path;
};

export const findDegrees = (adj, v, isOrgraph) => {
  if (isOrgraph) {
    let outputDegree = adj[v].reduce((sum, item) => sum + item, 0);
    let inputDegree = adj.reduce((sum, item) => sum + item[v], 0);
    return outputDegree !== inputDegree;
  } else {
    let degree = adj[v].reduce((sum, item) => sum + item, 0);
    return degree % 2 === 1;
  }
};
