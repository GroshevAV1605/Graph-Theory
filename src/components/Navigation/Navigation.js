import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/lab1" className="nav-link">
          Lab1
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lab2" className="nav-link">
          Бинарные операции
        </Link>
      </li>
      <li className="nav-item">Lab 3</li>
    </ul>
  );
}
