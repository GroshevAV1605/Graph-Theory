import React from 'react';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';
import {WeightGraphToMatrix} from '../../utils/Lab5functions';
import {
  MinKruskalsTree,
  MaxKruskalsTree,
  WeightedGrapToOutput,
  PrimsAlgorithm
} from '../../utils/Lab8functions';
import styles from './Lab8.module.css';

const Lab8Result = ({graph}) => {
  let Dmatrix = WeightGraphToMatrix(graph);
  let DmatrixToOutput = WeightedGrapToOutput(Dmatrix.matrix);
  //!!!Крускал!!!
  let [minKruskal, minKruskalWeight] = MinKruskalsTree(graph);
  let [maxKruskal, maxKruskalWeight] = MaxKruskalsTree(graph);
  let minKruskalMatrix = WeightGraphToMatrix(minKruskal);
  let maxKruskalMatrix = WeightGraphToMatrix(maxKruskal);
  let minKruskalMatrixToOutput = WeightedGrapToOutput(minKruskalMatrix.matrix);
  let maxKruskalMatrixToOutput = WeightedGrapToOutput(maxKruskalMatrix.matrix);
  //!!!Прим!!!
  let [minPrim, minPrimWeight] = PrimsAlgorithm(Dmatrix.matrix, Dmatrix.nodes);
  let minPrimMatrix = WeightGraphToMatrix(minPrim);
  let minPrimMatrixToOutput = WeightedGrapToOutput(minPrimMatrix.matrix);

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
      <div className={styles.flexContainer}>
        <div>
          <h4>Минимальное остовное дерево (алгоритм Крускала)</h4>
          <GraphDrawing
            matrix={minKruskalMatrix.matrix}
            nodes={minKruskalMatrix.nodes}
            isWeighted={true}
            isOrgraph={false}
          />
          <Matrix
            matrix={minKruskalMatrixToOutput}
            nodes={minKruskalMatrix.nodes}
          />
          <br />
          <b>Вес: {minKruskalWeight}</b>
        </div>

        <div>
          <h4>Максимальное остовное дерево (алгоритм Крускала)</h4>
          <GraphDrawing
            matrix={maxKruskalMatrix.matrix}
            nodes={maxKruskalMatrix.nodes}
            isWeighted={true}
            isOrgraph={false}
          />
          <Matrix
            matrix={maxKruskalMatrixToOutput}
            nodes={maxKruskalMatrix.nodes}
          />
          <br />
          <b>Вес: {maxKruskalWeight}</b>
        </div>
      </div>
      <div>
        <h4>Минимальное остовное дерево (алгоритм Прима)</h4>
        <GraphDrawing
          matrix={minPrimMatrix.matrix}
          nodes={minPrimMatrix.nodes}
          isWeighted={true}
          isOrgraph={false}
        />
        <Matrix matrix={minPrimMatrixToOutput} nodes={minPrimMatrix.nodes} />
        <br />
        <b>Вес: {minPrimWeight}</b>
      </div>
    </div>
  );
};

export default Lab8Result;
