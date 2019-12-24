import React from 'react';
import GraphDrawing from '../GraphDrawing';
import {WeightedGrapToOutput} from '../../utils/Lab8functions';
import {
  WeightGraphToMatrix,
  StartFlow,
  GraphMin
} from '../../utils/Lab9functions';
import {FordFulkerson} from '../../utils/Lab9functions';

const Lab9Result = ({graph}) => {
  let Imatrix = WeightGraphToMatrix(graph);
  ////////////////////////////////////////////////
  let startFlow = StartFlow(graph);
  let Graph = GraphMin(graph);
  let Dmatrix = WeightGraphToMatrix(Graph);

  let [FFmax, FFPaths] = FordFulkerson(
    Dmatrix.matrix,
    0,
    Dmatrix.matrix.length - 1,
    graph.nodes
  );

  Dmatrix.matrix = Dmatrix.matrix.map(ar => ar.map(el => el && el.toString()));
  return (
    <div>
      <GraphDrawing
        matrix={Imatrix.matrix}
        nodes={Imatrix.nodes}
        isWeighted={true}
      />

      <h3>Начальный поток = {startFlow}</h3>
      <h3>Максимальный поток = {FFmax + startFlow}</h3>

      {FFPaths.map(({path, flow}, i) => (
        <div key={i}>
          <p>
            {i + 1}) Поток = {flow}
          </p>
          <p>{path.join(' <- ')}</p>
        </div>
      ))}
      <GraphDrawing
        matrix={Dmatrix.matrix}
        nodes={Dmatrix.nodes}
        isWeighted={true}
        length={100}
      />
    </div>
  );
};

export default Lab9Result;
