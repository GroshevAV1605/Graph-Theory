import React from 'react';
import styles from './Matrix.module.css';

const Matrix = props => {
  let matrix = props.matrix;
  let nodes = props.nodes;
  return (
    <div>
      <table className={styles.matrix}>
        <tbody>
          {nodes ? (
            <tr>
              <td className={styles.td_node}></td>
              {nodes.map((item, i) => (
                <td key={i} className={styles.td_node}>
                  {item}
                </td>
              ))}
            </tr>
          ) : (
            ''
          )}
          {matrix.map((item, i) => (
            <tr key={i}>
              {nodes ? <td className={styles.td_node}>{nodes[i]}</td> : ''}
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
