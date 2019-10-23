import React, {useState} from 'react';
import {
  AdjListToMatrix,
  isOriented,
  buildIncMatrix,
  NodesDegrees,
  CountMatrixDegree,
  GraphCharacteristics,
  CountMatrixC
} from '../../utils/Lab1functions';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';

const Lab1Result = props => {
  let [len, handellen] = useState(0);
  let [lenMatrix, handleLenMatrix] = useState([]);

  let adjList = props.adjacencyList;
  let adjMatrix = AdjListToMatrix(adjList);
  if (!adjMatrix) {
    return <p>Введите корректные данные</p>;
  }
  let isOrGraph = isOriented(adjMatrix);
  let IncMatrix = buildIncMatrix(adjMatrix, isOrGraph);
  let {Degrees, isolated, leaf} = NodesDegrees(adjMatrix, isOrGraph);
  let Cmatrix = CountMatrixC(adjMatrix, adjMatrix.length - 1);
  let Cmatrix2 = CountMatrixC(adjMatrix, adjMatrix.length);
  let {PsevdoGraph, MultiGraph} = GraphCharacteristics(adjMatrix);

  const lenOnChange = e => {
    let value = e.target.value;
    handellen(value);
    handleLenMatrix(CountMatrixDegree(adjMatrix, value));
  };

  console.log(adjMatrix);
  console.log(IncMatrix);

  return (
    <div>
      <div>
        <GraphDrawing matrix={adjMatrix} />
      </div>
      <p> Граф {isOrGraph ? 'ориентированный' : 'неориентированный'}</p>
      <p>
        {PsevdoGraph ? 'Является псевдографом' : 'Не является псевдографом'}
      </p>
      <p>{MultiGraph ? 'Является мультиграфом' : 'Не является мультиграфом'}</p>
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
        <h4>С матрица(n-1):</h4>
        <Matrix matrix={Cmatrix} />
      </div>
      <div>
        <h4>С матрица(n):</h4>
        <Matrix matrix={Cmatrix2} />
      </div>
      <div>
        <h4>Количество маршрутов заданной длины:</h4>
        <label>Длина :</label>
        <input type="number" value={len} onChange={lenOnChange}></input>
        <Matrix matrix={lenMatrix}></Matrix>
      </div>
    </div>
  );
};

export default Lab1Result;
