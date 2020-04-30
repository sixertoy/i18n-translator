import React from 'react';

import logo from '../../../assets/json_logo.svg';

const JSONLogo = () => (
  <a href="/">
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
  </a>
);

export default JSONLogo;
