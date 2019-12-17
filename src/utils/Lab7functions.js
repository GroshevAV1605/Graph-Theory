export const WeightGraphToMatrix = ({nodes, edges}) => {
  let DMatrix = new Array(nodes.length).fill([]);
  DMatrix = DMatrix.map(arr => new Array(nodes.length).fill(Infinity));
  edges.forEach(item => {
    DMatrix[nodes.indexOf(item.from)][nodes.indexOf(item.to)] = item.weight;
  });

  return {matrix: DMatrix, nodes};
};

export const substractFromMatrix = Dmatrix => {
  let minColumn = new Array(Dmatrix.length).fill(0);
  let minRow = Dmatrix.map(arr => Math.min(...arr));
  Dmatrix = Dmatrix.map((arr, i) => arr.map(el => el - minRow[i]));
  Dmatrix.forEach(arr =>
    arr.forEach((el, j) => {
      minColumn[j] = Math.min(minColumn[j], el);
    })
  );
  Dmatrix = Dmatrix.map(arr => arr.map((el, j) => el - minColumn[j]));
  let subtractSum =
    minColumn.reduce((sum, el) => sum + el, 0) +
    minRow.reduce((sum, el) => sum + el, 0);

  return subtractSum;
};
