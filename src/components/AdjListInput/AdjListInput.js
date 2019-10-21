import React, {useState} from 'react';
import InputLine from '../InputLine';

const AdjListInput = props => {
  const [vertexCount, handleVertexCount] = useState('2');

  const onChangeVertexCount = e => {
    let newValue = e.target.value;
    handleVertexCount(newValue);
    props.ChangeVertexCount(parseInt(newValue));
  };

  const NumVertexCount = parseInt(vertexCount);
  let Lists = [];
  for (let i = 0; i < NumVertexCount; i++) {
    Lists.push(
      <InputLine key={i} index={i} ChangeAdjacency={props.ChangeAdjacency} />
    );
  }
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
      <div>
        <p>Список смежности графа:</p>
        <ul>{Lists}</ul>
      </div>
    </div>
  );
};

export default AdjListInput;
