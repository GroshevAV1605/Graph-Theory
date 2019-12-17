import React from 'react';
import {WeightGraphToMatrix, FloydWarshell} from '../../utils/Lab5functions';
import {WeightedGrapToOutput} from '../../utils/Lab8functions';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';
import styles from './Lab5.module.css';

const Lab5Result = ({graph}) => {
  let Dmatrix = WeightGraphToMatrix(graph);
  let weights = graph.edges.map(edge => edge.weight);
  let DmatrixToOutput = WeightedGrapToOutput(Dmatrix.matrix);
  let DmMatrix = WeightedGrapToOutput(FloydWarshell(Dmatrix.matrix));

  console.log(weights);
  return (
    <div>
      <GraphDrawing
        matrix={Dmatrix.matrix}
        nodes={Dmatrix.nodes}
        isWeighted={true}
      />
      <div className={styles.matrixesContainer}>
        <div>
          <h4>Матрица длин дуг</h4>
          <Matrix matrix={DmatrixToOutput} nodes={Dmatrix.nodes} />
        </div>
        <div>
          <h4>Матрица кратчайших путей:</h4>
          <Matrix matrix={DmMatrix} nodes={Dmatrix.nodes} />
        </div>
      </div>
    </div>
  );
};

export default Lab5Result;
