import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab2Result from './Lab2Result';
import './Lab2.css';

const Lab2 = props => {
  return (
    <div>
      <div className="input-container">
        <div>
          <h4>Матрица G1</h4>
          <MatrixInput
            matrix={props.state.FirstAdjMatrix}
            ChangeAdjacency={props.ChangeFirstAdjacency}
            ChangeVertexCount={props.ChangeFirstVertexCount}
          />
        </div>
        <div>
          <h4>Матрица G2</h4>
          <MatrixInput
            matrix={props.state.SecondAdjMatrix}
            ChangeAdjacency={props.ChangeSecondAdjacency}
            ChangeVertexCount={props.ChangeSecondVertexCount}
          />
        </div>
      </div>
      <button onClick={() => props.showResult()}>Расчитать</button>
      {!props.state.hideOutput ? <Lab2Result /> : ''}
    </div>
  );
};

export default Lab2;
