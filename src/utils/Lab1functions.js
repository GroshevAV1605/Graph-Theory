import React from 'react';

export const AdjListToMatrix = list => {
  let adjMatrix = [];
  let length = list.length;

  for (let item of list) {
    let line = [];
    line.length = length;
    line.fill(0);

    let itemArray = item.split(' ');

    for (let item of itemArray) {
      if (+item > length - 1) {
        return;
      }
      if (item) line[+item] += 1;
    }
    adjMatrix.push(line);
  }
  return adjMatrix;
};

export const isOriented = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return true;
      }
    }
  }
  return false;
};

export const buildIncMatrix = (matrix, isOrGraph) => {
  let length = matrix.length;
  let IncMatrix = [];
  IncMatrix.length = length;
  IncMatrix.fill([]);

  //Считаем количество дуг по количеству 1 в матрице смежности
  let edgeCount = matrix.reduce((sum, el) => {
    return sum + el.reduce((sum, el) => sum + el, 0);
  }, 0);

  for (let i = 0; i < length; i++) {
    IncMatrix[i] = [];
    IncMatrix[i].length = edgeCount;
    IncMatrix[i].fill(0);
  }

  let edgeNum = 0;
  /////////РАЗОБРАТЬСЯ С ПЕТЛЯМИ + НЕОР ГРАФ//////////////
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      for (let k = 0; k < matrix[i][j]; k++) {
        IncMatrix[i][edgeNum] = isOrGraph ? -1 : 1;
        IncMatrix[j][edgeNum] = 1;
        edgeNum++;
      }
    }
  }

  console.log(edgeCount);

  return IncMatrix;
};

export const NodesDegrees = (matrix, isOrGraph) => {
  let length = matrix.length;
  let Degrees = [];
  let sumDegrees = [];

  for (let i = 0; i < length; i++) {
    if (isOrGraph) {
      let outputDegree = matrix[i].reduce((sum, item) => sum + item, 0);
      let inputDegree = matrix.reduce((sum, item) => sum + item[i], 0);
      Degrees.push(
        <li key={'or-' + i}>{'Deg v' + i + '(-) = ' + outputDegree}</li>
      );
      Degrees.push(
        <li key={'or+' + i}>{'Deg v' + i + '(+) = ' + inputDegree}</li>
      );

      sumDegrees.push(outputDegree + inputDegree);
    } else {
      let degree = matrix[i].reduce((sum, item) => sum + item, 0);
      Degrees.push(<li key={'nor' + i}>{'Deg v' + i + ' = ' + degree}</li>);
      sumDegrees.push(degree);
    }
  }
  if (isOrGraph) {
    sumDegrees.forEach((item, i) => {
      Degrees.push(<li key={'nor' + item}>{'Deg v' + i + ' = ' + item}</li>);
    });
  }

  let isolated = [];
  let leaf = [];
  sumDegrees.forEach((item, index) => {
    if (!item) {
      isolated.push(index);
    }
    if (isOrGraph && item === 1) {
      leaf.push(index);
    }
  });

  return {Degrees, isolated, leaf};
};

export const CountMatrixC = (matrix, deg) => {
  let n = deg;
  let result = matrix.map(item => item.map(jtem => jtem));
  let matrixPow = matrix.map(item => item.map(jtem => jtem));

  while (n > 1) {
    matrixPow = MultiplyMatrix(matrixPow, matrix);
    result = SumMatrix(result, matrixPow);
    n--;
  }

  return result;
};

export const CountMatrixDegree = (matrix, deg) => {
  let n = deg;
  let result = matrix.map(item => item.map(jtem => jtem));
  while (n > 1) {
    result = MultiplyMatrix(result, matrix);
    n--;
  }
  return result;
};

export const MultiplyMatrix = (Amatrix, Bmatrix) => {
  let result = [];

  for (let i = 0; i < Amatrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < Amatrix.length; j++) {
      result[i][j] = 0;
      for (let k = 0; k < Amatrix.length; k++) {
        result[i][j] += Amatrix[i][k] * Bmatrix[k][j];
      }
    }
  }
  return result;
};

const SumMatrix = (Amatrix, Bmatrix) =>
  Amatrix.map((item, i) => item.map((jtem, j) => jtem + Bmatrix[i][j]));

export const GraphCharacteristics = matrix => {
  let length = matrix.length;
  let PsevdoGraph = false;
  let MultiGraph = false;
  for (let i = 0; i < length; i++) {
    if (matrix[i][i]) {
      PsevdoGraph = true;
      break;
    }
    for (let j = 0; j < length; j++) {
      if (matrix[i][j] > 1) {
        MultiGraph = true;
        break;
      }
    }
  }

  return {PsevdoGraph, MultiGraph};
};
