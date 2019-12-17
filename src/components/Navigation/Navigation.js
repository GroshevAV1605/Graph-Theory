import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <ol className="nav-list">
      {themes.map((theme, i) => (
        <li className="nav-item" key={i}>
          <Link to={'/lab' + (i + 1)} className="nav-link">
            {theme}
          </Link>
        </li>
      ))}
    </ol>
  );
}

const themes = [
  'Характеристика графов',
  'Бинарные операции',
  'Алгоритм фронта волны',
  'Компоненты связности',
  'Алгоритм Флойда-Уоршелла',
  'Эйлеровы графы',
  'Гамильтоновы графы',
  'Деревья и остовы',
  'Поток в сети'
];
