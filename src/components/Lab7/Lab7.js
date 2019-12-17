import React from 'react';
import Lab7Result from './Lab7Result';
import MatrixInput from '../MatrixInput';

const Lab7 = props => {
  return (
    <div>
      <h2>Гамильтоновы графы.</h2>
      <div>
        <h4>Матрица G:</h4>
        <MatrixInput
          matrix={props.state.AdjMatrix}
          ChangeAdjacency={props.ChangeAdjacency}
          ChangeVertexes={props.ChangeVertexes}
          weighted={true}
        />
      </div>
      <button onClick={() => props.showResult(false)}>Расчитать</button>
      {!props.state.hideOutput && <Lab7Result graph={props.state.AdjMatrix} />}
    </div>
  );
};

export default Lab7;
