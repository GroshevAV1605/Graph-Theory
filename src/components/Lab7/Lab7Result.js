import React from 'react';
import {WeightGraphToMatrix} from '../../utils/Lab7functions';
import GraphDrawing from '../GraphDrawing';
import Matrix from '../Matrix';

const Lab7Result = ({graph}) => {
  let Dmatrix = WeightGraphToMatrix(graph);
  let DmatrixToOutput = Dmatrix.matrix.map(ar =>
    ar.map(el => (el === Infinity ? '\u221e' : el))
  );

  return (
    <div>
      <GraphDrawing
        matrix={Dmatrix.matrix}
        nodes={Dmatrix.nodes}
        isWeighted={true}
      />
      <div>
        <h4>Матрица длин дуг:</h4>
        <Matrix matrix={DmatrixToOutput} nodes={Dmatrix.nodes} />
      </div>
    </div>
  );
};

export default Lab7Result;
