import React from 'react';
import Matrix from '../Matrix';
import FindPath from './FindPath';
import GraphDrawing from '../GraphDrawing';
import {
  DistanceMatrix,
  GraphRadius,
  GraphDiameter,
  BuildGraphCenter,
  BuildGraphPeriphery
} from '../../utils/Lab3functions';
import {GraphToMatrix} from '../../utils/Lab2functions';
import styles from './Lab3.module.css';

const Lab3Result = ({graph}) => {
  let matrix = GraphToMatrix(graph);

  let distanceMatrix = DistanceMatrix(graph);
  let {radius, centerNodes} = GraphRadius(
    distanceMatrix.Dmatrix,
    distanceMatrix.nodes
  );
  let {diameter, peripheryNodes} = GraphDiameter(
    distanceMatrix.Dmatrix,
    distanceMatrix.nodes
  );

  let graphCenter = BuildGraphCenter(graph, centerNodes);
  let graphPreiphery = BuildGraphPeriphery(graph, peripheryNodes);

  return (
    <div>
      <FindPath graph={graph} />
      <div className={styles.flexContainer}>
        <GraphDrawing
          matrix={matrix.adjMatrix}
          nodes={matrix.nodes}
          isOrgraph={false}
          length={140}
        />
        <div>
          <h4>Матрица расстояний:</h4>
          <Matrix
            matrix={distanceMatrix.Dmatrix}
            nodes={distanceMatrix.nodes}
          />
        </div>
        <div className={styles.characteristicContainer}>
          <p>Радиус графа = {radius}</p>
          <p>Центральные вершины: {centerNodes.join(', ')}</p>
          <p>Диаметр графа = {diameter}</p>
          <p>Периферические вершины: {peripheryNodes.join(', ')}</p>
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div>
          <h2>Центр графа</h2>
          <GraphDrawing
            matrix={graphCenter.adjMatrix}
            nodes={graphCenter.nodes}
            isOrgraph={false}
          />
        </div>
        <div>
          <h2>Периферия графа</h2>
          <GraphDrawing
            matrix={graphPreiphery.adjMatrix}
            nodes={graphPreiphery.nodes}
            isOrgraph={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Lab3Result;
