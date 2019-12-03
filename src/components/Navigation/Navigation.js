import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <ol className="nav-list">
      <li className="nav-item">
        <Link to="/lab1" className="nav-link">
          Характеристика графов
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lab2" className="nav-link">
          Бинарные операции
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lab3" className="nav-link">
          Алгоритм фронта волны
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lab4" className="nav-link">
          Компоненты связности
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lab5" className="nav-link">
          Алгоритм Флойда-Уоршелла
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lab6" className="nav-link">
          Эйлеровы графы
        </Link>
      </li>
    </ol>
  );
}
