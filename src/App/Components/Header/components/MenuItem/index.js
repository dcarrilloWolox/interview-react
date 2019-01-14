import React from 'react';
import { Link } from 'react-router-dom';

import  './styles.css';

function MenuItem({ label, link }) {
  return (
    <Link to={link}>
      <li className="item">{label}</li>
    </Link>
  );
}

export default MenuItem;
