import React from 'react';
import styles from './Matrix.module.css';

const Matrix = props => {
  let matrix = props.matrix;
  let nodes = props.nodes;
  let edges = props.isInc ? matrix[0].map((el, i) => 'e' + i) : nodes;
  return (
    <div>
      <table className={styles.matrix}>
        <tbody>
          {edges && (
            <tr>
              <td className={styles.tdNode}></td>
              {edges.map((item, i) => (
                <td key={i} className={styles.tdNode}>
                  {item}
                </td>
              ))}
            </tr>
          )}
          {matrix.map((item, i) => (
            <tr key={i}>
              {nodes && <td className={styles.tdNode}>{nodes[i]}</td>}
              {item.map((item, i) => (
                <td key={i}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matrix;
