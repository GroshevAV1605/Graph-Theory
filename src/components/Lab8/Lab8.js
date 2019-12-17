import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab8Result from './Lab8Result';

const Lab8 = props => {
  return (
    <div>
      <h2>Деревья и остовы графов. Алгоритм Краскала. Алгоритм Прима</h2>
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
      {!props.state.hideOutput && <Lab8Result graph={props.state.AdjMatrix} />}
    </div>
  );
};

export default Lab8;
