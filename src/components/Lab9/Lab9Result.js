import React from 'react';
import GraphDrawing from '../GraphDrawing';
import {WeightedGrapToOutput} from '../../utils/Lab8functions';
import {WeightGraphToMatrix} from '../../utils/Lab5functions';
import Matrix from '../Matrix';

const Lab9Result = ({graph}) => {
  let Dmatrix = WeightGraphToMatrix(graph);
  let DmatrixToOutput = WeightedGrapToOutput(Dmatrix.matrix);
  return (
    <div>
      <GraphDrawing
        matrix={Dmatrix.matrix}
        nodes={Dmatrix.nodes}
        isWeighted={true}
        isOrgraph={false}
      />
      <h4>Матрица длин дуг:</h4>
      <Matrix matrix={DmatrixToOutput} nodes={Dmatrix.nodes} />
    </div>
  );
};

export default Lab9Result;
