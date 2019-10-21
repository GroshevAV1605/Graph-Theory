import React from 'react';
import styles from './Matrix.module.css';

const Matrix = props => {
  let matrix = props.matrix;
  return (
    <div>
      <table className={styles.matrix}>
        <tbody>
          {matrix.map((item, i) => (
            <tr key={i}>
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
