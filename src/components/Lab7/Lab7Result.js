import React from 'react';
import {
  WeightGraphToMatrix,
  LittleStart,
  node
} from '../../utils/Lab7functions';
import GraphDrawing from '../GraphDrawing';
import Matrix from '../Matrix';

const Lab7Result = ({graph}) => {
  let Dmatrix = WeightGraphToMatrix(graph);
  let DmatrixToOutput = Dmatrix.matrix.map(ar =>
    ar.map(el => (el === Infinity ? '\u221e' : el))
  );
  let start = new node(Dmatrix.matrix);
  start.findSubstractSum();
  let [path, minWeight] = LittleStart(start, start.w, Dmatrix.nodes.slice());
  path.push('1');
  path.unshift('1');
  console.log(start);

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
      <p>Weight = {minWeight}</p>
      <p>Path: {path.join(' -> ')}</p>
    </div>
  );
};

export default Lab7Result;
