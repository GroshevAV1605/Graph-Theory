import React from 'react';
import {
  AdjListToMatrix,
  isOriented,
  buildIncMatrix,
  NodesDegrees,
  CountC
} from '../../utils/Lab1functions';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';

const Lab1Result = props => {
  let adjList = props.adjacencyList;
  let adjMatrix = AdjListToMatrix(adjList);
  if (!adjMatrix) {
    return <p>Введите корректные данные</p>;
  }
  let isOrGraph = isOriented(adjMatrix);
  let IncMatrix = buildIncMatrix(adjMatrix, isOrGraph);
  let {Degrees, isolated, leaf} = NodesDegrees(adjMatrix, isOrGraph);
  let Cmatrix = CountC(adjMatrix);

  console.log(adjMatrix);
  console.log(IncMatrix);

  return (
    <div>
      <div>
        <GraphDrawing matrix={adjMatrix} />
      </div>
      <p> Граф {isOrGraph ? 'ориентированный' : 'неориентированный'}</p>
      <div>
        <h4>Матрица смежности:</h4>
        <Matrix matrix={adjMatrix} />
      </div>
      <div>
        <h4>Матрица инцедентности:</h4>
        <Matrix matrix={IncMatrix}></Matrix>
      </div>
      <div>
        <h4>Степени вершины:</h4>
        <ul>{Degrees}</ul>
        <p>Изолированные вершины: {isolated}</p>
        {!props.isOrGraph && <p>Висячие вершины: {leaf}</p>}
      </div>
      <div>
        <h4>С матрица:</h4>
        <Matrix matrix={Cmatrix} />
      </div>
    </div>
  );
};

export default Lab1Result;
