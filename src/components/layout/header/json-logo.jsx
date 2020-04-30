import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/json_logo.svg';

const JSONLogo = () => (
  <Link to="/">
    <img
      alt="i18n Online Translations Editor (JSON)"
      src={logo}
      style={{
        height: '60px',
        marginRight: '10px',
        verticalAlign: 'bottom',
        width: '60px',
      }}
    />
  </Link>
);

export default JSONLogo;
