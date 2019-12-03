import React from 'react';
import MatrixInput from '../MatrixInput';
import Lab5Result from './Lab5Result';

const Lab5 = props => {
  return (
    <div>
      <h2>
        Минимальные пути (маршруты) в нагруженных орграфах (графах). Алгоритм
        Флойда-Уоршелла
      </h2>
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
      {!props.state.hideOutput && <Lab5Result graph={props.state.AdjMatrix} />}
    </div>
  );
};

export default Lab5;
