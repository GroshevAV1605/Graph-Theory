import React from 'react';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';
import {
  MatrixUnion,
  MatrixIntersection,
  MatrixCompound,
  MatrixRingAmount
} from '../../utils/Lab2functions';

const Lab2Result = ({FirstGraph, SecondGraph}) => {
  let union = MatrixUnion(FirstGraph, SecondGraph);
  let intersection = MatrixIntersection(FirstGraph, SecondGraph);
  let compound = MatrixCompound(FirstGraph, SecondGraph);
  let ringAmount = MatrixRingAmount(FirstGraph, SecondGraph);

  return (
    <div>
      <div>
        <h4>G1 &cup; G2</h4>
        <Matrix matrix={union} />
      </div>
      <div>
        <h4>G1 &cap; G2</h4>
        <Matrix matrix={intersection} />
      </div>
      <div>
        <h4>G1 + G2</h4>
        <Matrix matrix={compound} />
      </div>
      <div>
        <h4>G1 &#8853; G2</h4>
        <Matrix matrix={ringAmount} />
      </div>
      <div>
        <h4>G1 x G2</h4>
      </div>
    </div>
  );
};

export default Lab2Result;
