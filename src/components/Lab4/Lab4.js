import React from 'react';
import MatrixInput from '../MatrixInput/MatrixInput';
import Lab4Result from './Lab4Result';

const Lab4 = props => {
  return (
    <div>
      <h2>Связные графы. Компоненты связности</h2>
      <div>
        <h4>Матрица G:</h4>
        <MatrixInput
          matrix={props.state.AdjMatrix}
          ChangeAdjacency={props.ChangeAdjacency}
          ChangeVertexes={props.ChangeVertexes}
        />
      </div>
      <button onClick={() => props.showResult()}>Расчитать</button>
      {!props.state.hideOutput ? (
        <Lab4Result graph={props.state.AdjMatrix} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Lab4;
