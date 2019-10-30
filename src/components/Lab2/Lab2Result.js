import React from 'react';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';
import {
  MatrixUnion,
  MatrixIntersection,
  MatrixCompound,
  MatrixRingAmount,
  MatrixCartesian
} from '../../utils/Lab2functions';

const Lab2Result = ({FirstGraph, SecondGraph}) => {
  let union = MatrixUnion(FirstGraph, SecondGraph);
  let intersection = MatrixIntersection(FirstGraph, SecondGraph);
  let compound = MatrixCompound(FirstGraph, SecondGraph);
  let ringAmount = MatrixRingAmount(FirstGraph, SecondGraph);
  let cartesian = MatrixCartesian(FirstGraph, SecondGraph);

  return (
    <div>
      <div>
        <h4>G1 &cup; G2</h4>
        <div className="operation-container">
          <Matrix matrix={union.adjMatrix} nodes={union.nodes} />
          <GraphDrawing matrix={union.adjMatrix} length={50} />
        </div>
      </div>
      <div>
        <h4>G1 &cap; G2</h4>
        <div className="operation-container">
          <Matrix matrix={intersection.adjMatrix} nodes={intersection.nodes} />
          <GraphDrawing matrix={intersection.adjMatrix} length={50} />
        </div>
      </div>
      <div>
        <h4>G1 + G2</h4>
        <div className="operation-container">
          <Matrix matrix={compound.adjMatrix} nodes={compound.nodes} />
          <GraphDrawing matrix={compound.adjMatrix} length={50} />
        </div>
      </div>
      <div>
        <h4>G1 &#8853; G2</h4>
        <div className="operation-container">
          <Matrix matrix={ringAmount.adjMatrix} nodes={ringAmount.nodes} />
          <GraphDrawing matrix={ringAmount.adjMatrix} length={50} />
        </div>
      </div>
      <div>
        <h4>G1 x G2</h4>
        <div className="operation-container">
          <Matrix matrix={cartesian.adjMatrix} nodes={cartesian.nodes} />
          <GraphDrawing matrix={cartesian.adjMatrix} length={50} />
        </div>
      </div>
    </div>
  );
};

export default Lab2Result;
