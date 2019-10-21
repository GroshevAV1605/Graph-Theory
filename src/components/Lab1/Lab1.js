import React from 'react';
import AdjListInput from '../AdjListInput';
import Lab1Result from './Lab1Result';
import './Lab1.css';

const Lab1 = props => {
  return (
    <div className="container">
      <AdjListInput
        state={props.state}
        ChangeAdjacency={props.ChangeAdjacency}
        ChangeVertexCount={props.ChangeVertexCount}
      />
      <button onClick={() => props.showResult()}>Расчитать</button>
      {!props.state.hideOutput ? (
        <Lab1Result adjacencyList={props.state.adjacencyList} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Lab1;
