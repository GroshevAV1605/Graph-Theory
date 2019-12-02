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
        <MatrixInput />
      </div>
    </div>
  );
};

export default Lab5;
