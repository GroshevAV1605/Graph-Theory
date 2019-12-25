export const WeightGraphToMatrix = ({nodes, edges}) => {
  let DMatrix = new Array(nodes.length).fill([]);
  DMatrix = DMatrix.map(arr => new Array(nodes.length).fill(Infinity));
  edges.forEach(item => {
    DMatrix[nodes.indexOf(item.from)][nodes.indexOf(item.to)] = item.weight;
  });

  return {matrix: DMatrix, nodes};
};

export const LittleStart = (Cnode, MainW, nodes, result = []) => {
  console.log(MainW, Cnode);

  Cnode.nei = findNextSteps(Cnode.matrix, nodes, result);

  if (Cnode.matrix.length <= 2) {
    return [result, MainW];
  }

  Cnode.nei[0].findSubstractSum();
  Cnode.nei[1].findSubstractSum();

  if (Cnode.nei[0].w > Cnode.nei[1].w) {
    return LittleStart(Cnode.nei[1], MainW + Cnode.nei[1].w, nodes, result);
  } else {
    return LittleStart(Cnode.nei[0], MainW + Cnode.nei[0].w, nodes, result);
  }
};

export const findNextSteps = (matrix, nodes, result) => {
  //1 matrix
  let delEl = matrix[0].reduce(
    (minIndex, el, index, array) => (el < array[minIndex] ? index : minIndex),
    0
  );
  let D1matrix = [];
  for (let i = 0; i < matrix.length; i++) {
    D1matrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      if (j !== delEl) {
        D1matrix[i].push(matrix[i][j]);
      }
    }
  }
  D1matrix[0] = Array.from(D1matrix[delEl]);
  D1matrix[0][0] = Infinity;
  D1matrix.splice(delEl, 1);
  //2 matrix
  let D2Matrix = matrix.map(ar => ar.slice());
  D2Matrix[0][delEl] = Infinity;

  result.push(nodes.splice(delEl, 1));

  return [new node(D1matrix), new node(D2Matrix)];
};

export function node(matrix, w = 0, nei = []) {
  this.matrix = matrix;
  this.w = w;
  this.nei = nei;

  this.findSubstractSum = function() {
    let minColumn = Array.from(matrix[0]);
    let minRow = this.matrix.map(arr => Math.min(...arr));
    this.matrix = this.matrix.map((arr, i) =>
      arr.map((el, j) => el - minRow[i])
    );
    this.matrix.forEach(arr =>
      arr.forEach((el, j) => {
        minColumn[j] = Math.min(minColumn[j], el);
      })
    );
    this.matrix = this.matrix.map((arr, i) =>
      arr.map((el, j) => el - minColumn[j])
    );
    let subtractSum =
      minColumn.reduce((sum, el) => sum + el, 0) +
      minRow.reduce((sum, el) => sum + el, 0);
    this.w = subtractSum;
  };
}
/*
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
*/
