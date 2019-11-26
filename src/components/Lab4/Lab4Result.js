import React from 'react';
import {GraphToMatrix} from '../../utils/Lab2functions';
import {
  IncMatrixFromList,
  ReachabilityMatrix,
  StrConnMatrix,
  ConnectivityComponent
} from '../../utils/Lab4functions';
import {isOriented} from '../../utils/Lab1functions';
import Matrix from '../Matrix';
import GraphDrawing from '../GraphDrawing';
import styles from './Lab4.module.css';

const Lab4Result = ({graph}) => {
  let adj = GraphToMatrix(graph);
  let inc = IncMatrixFromList(graph, isOriented(adj.adjMatrix));
  let reach = ReachabilityMatrix(adj.adjMatrix);
  let strCon = StrConnMatrix(reach);
  let conComponents = ConnectivityComponent(strCon, graph.nodes, adj.adjMatrix);
  console.log(conComponents);
  return (
    <div>
      <GraphDrawing matrix={adj.adjMatrix} nodes={adj.nodes} length={100} />
      <div className={styles.matrixesContainer}>
        <div className={styles.matrix}>
          <h4>Матрица смежности:</h4>
          <Matrix matrix={adj.adjMatrix} nodes={adj.nodes} />
        </div>
        <div className={styles.matrix}>
          <h4>Матрица инцедентности:</h4>
          <Matrix matrix={inc} nodes={graph.nodes} isInc={true} />
        </div>
        <div className={styles.matrix}>
          <h4>Матрица достижимости:</h4>
          <Matrix matrix={reach} nodes={graph.nodes} />
        </div>
        <div className={styles.matrix}>
          <h4>Матрица сильной связности:</h4>
          <Matrix matrix={strCon} nodes={graph.nodes} />
        </div>
      </div>
      <h4>Компоненты связности:</h4>
      <div className={styles.adjCompContainer}>
        {conComponents.compAdj.map((el, i) => (
          <Matrix key={i} matrix={el.adjMatrix} nodes={el.nodes} />
        ))}
      </div>
      <div className={styles.graphContainer}>
        <GraphDrawing
          matrix={conComponents.compMatrix}
          nodes={graph.nodes}
          length={100}
        />
      </div>
    </div>
  );
};

export default Lab4Result;
