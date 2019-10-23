import React from 'react';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';
import {
  MatrixUnion,
  MatrixIntersection,
  MatrixCompound
} from '../../utils/Lab2functions';

const Lab2Result = ({FirstGraph, SecondGraph}) => {
  let union = MatrixUnion(FirstGraph, SecondGraph);
  /*let intersection = MatrixIntersection(FirstGraph, SecondGraph);
  let compound = MatrixCompound(FirstGraph, SecondGraph);*/

  return (
    <div>
      <div>
        <h4>G1 &cup; G2</h4>
        <Matrix matrix={union} />
      </div>
    </div>
  );
};

export default Lab2Result;
