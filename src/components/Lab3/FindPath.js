import React, {useState} from 'react';
import {findPath} from '../../utils/Lab3functions';
import styles from './Lab3.module.css';

const FindPath = ({graph}) => {
  const FromChange = e => {
    handlePathFrom(e.target.value);
    handlePathChange(findPath(graph, e.target.value, path_to).join(' <- '));
  };

  const ToChange = e => {
    handlePathTo(e.target.value);
    handlePathChange(findPath(graph, path_from, e.target.value).join(' <- '));
  };

  let [path_from, handlePathFrom] = useState('');
  let [path_to, handlePathTo] = useState('');
  let [pathStr, handlePathChange] = useState('');

  return (
    <div className={styles.findPathContainer}>
      Поиск пути из вершины{' '}
      <input
        className={styles.pathInput}
        type="text"
        required
        value={path_from}
        onChange={FromChange}
      ></input>{' '}
      в вершину{' '}
      <input
        type="text"
        required
        value={path_to}
        className={styles.pathInput}
        onChange={ToChange}
      />
      <p>{pathStr}</p>
    </div>
  );
};

export default FindPath;
