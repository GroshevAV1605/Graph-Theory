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
              <td className={styles.tdNode}></td>
              {nodes.map((item, i) => (
                <td key={i} className={styles.tdNode}>
                  {item}
                </td>
              ))}
            </tr>
          ) : (
            ''
          )}
          {matrix.map((item, i) => (
            <tr key={i}>
              {nodes ? <td className={styles.tdNode}>{nodes[i]}</td> : ''}
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
