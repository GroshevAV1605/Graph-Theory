import React, {useState} from 'react';
import styles from './MatrixInput.module.css';

const MatrixInput = props => {
  let [vertexes, handleVertexes] = useState('');

  let {nodes, edges} = props.matrix;

  const onChangeVertexes = e => {
    let newValue = e.target.value;
    handleVertexes(newValue);
    props.ChangeVertexes(newValue.split(' '));
  };

  const onChangeMatrix = e => {
    props.ChangeAdjacency({
      from: e.target.dataset.node,
      to: e.target.value.split(' ')
    });
  };

  let matrixCells = nodes.map((node, i) => {
    let nodeEdges = edges.filter(edge => edge.from === node);
    nodeEdges = props.weighted
      ? nodeEdges.map(edge => edge.to + (edge.to && ':' + edge.weight))
      : nodeEdges.map(edge => edge.to);
    return (
      <div className="row" key={i}>
        <label>From: '{node}' to: </label>
        <input
          type="text"
          className={styles.edgeInput}
          value={nodeEdges.join(' ')}
          onChange={onChangeMatrix}
          data-node={node}
        />
      </div>
    );
  });

  return (
    <div>
      <div>
        <label>Вершины:</label>
        <input
          type="text"
          required
          value={vertexes}
          onChange={onChangeVertexes}
        ></input>
      </div>
      Матрица смежности:
      <div>{matrixCells}</div>
    </div>
  );
};

export default MatrixInput;
