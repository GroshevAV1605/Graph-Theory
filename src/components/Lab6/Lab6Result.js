import React from 'react';
import {GraphToMatrix} from '../../utils/Lab2functions';
import {IncMatrixFromList} from '../../utils/Lab4functions';
import {isOriented} from '../../utils/Lab1functions';
import {isEuler, findEulerPath} from '../../utils/Lab6functions';
import styles from './Lab6.module.css';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';

const Lab6Result = ({graph}) => {
  let adj = GraphToMatrix(graph);
  let isOr = isOriented(adj.adjMatrix);
  let inc = IncMatrixFromList(graph, isOr);
  let isGraphEuler = isEuler(adj.adjMatrix, isOr);
  let EulerPath = findEulerPath(adj.adjMatrix, adj.nodes, isOr).join(' -> ');
  return (
    <div>
      <GraphDrawing
        matrix={adj.adjMatrix}
        nodes={adj.nodes}
        isOrgraph={false}
        length={150}
      />
      <div className={styles.matrixesContainer}>
        <div className={styles.matrix}>
          <h4>Матрица смежности:</h4>
          <Matrix matrix={adj.adjMatrix} nodes={adj.nodes} />
        </div>
        {/*<div className={styles.matrix}>
          <h4>Матрица инцедентности:</h4>
          <Matrix matrix={inc} nodes={graph.nodes} isInc={true} />
  </div>*/}
      </div>
      {isGraphEuler ? (
        <div>
          {isGraphEuler == 1 ? (
            <p>Граф полуэйлеров, следовательно существует эйлеров путь</p>
          ) : (
            <p>Граф эйлеров, следовательно существует эйлеров цикл</p>
          )}
          <p>Эйлерова цепь (путь): {EulerPath}</p>
        </div>
      ) : (
        <p>Граф не является ейлеровым</p>
      )}
    </div>
  );
};

export default Lab6Result;
