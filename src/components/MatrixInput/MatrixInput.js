import React, {useState} from 'react';
import './MatrixInput.css';

const MatrixInput = props => {
  /*let [vertexCount, handleVertexCount] = useState(0);

  const NumVertexCount = parseInt(vertexCount);
  const MatrixTable = [];
  for (let i = 0; i < NumVertexCount; i++) {
    MatrixTable.push([]);
    for (let j = 0; j < NumVertexCount; j++) {
      MatrixTable[i].push(<input type={number} value />);
    }
  }*/

  let [vertexCount, handleVertexCount] = useState('0');

  let {matrix} = props;

  const onChangeVertexCount = e => {
    let newValue = e.target.value;
    handleVertexCount(newValue);
    props.ChangeVertexCount(parseInt(newValue));
  };

  const onChangeMatrix = e => {
    props.ChangeAdjacency({
      i: parseInt(e.target.dataset.i),
      j: parseInt(e.target.dataset.j),
      value: e.target.value
    });
  };

  let matrixCells = matrix.map((arr, i) => (
    <div className="row" key={i}>
      {arr.map((item, j) => (
        <input
          className="adj-matrix-cell"
          key={i + ';' + j}
          type="number"
          value={item}
          data-i={i}
          data-j={j}
          onChange={onChangeMatrix}
        ></input>
      ))}
    </div>
  ));

  return (
    <div>
      <div>
        <label>Количество вершин:</label>
        <input
          type="number"
          required
          value={vertexCount}
          onChange={onChangeVertexCount}
        ></input>
      </div>
      Матрица смежности:
      <div>{matrixCells}</div>
    </div>
  );
};

export default MatrixInput;
