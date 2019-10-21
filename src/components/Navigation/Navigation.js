import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/lab1" className="nav-link">
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lab2" className="nav-link">
          Lab 2
        </Link>
      </li>
      <li className="nav-item">Lab 3</li>
    </ul>
  );
}
