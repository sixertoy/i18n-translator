import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import logo from '../../../assets/json_logo.svg';

const useStyles = createUseStyles({
  image: {
    height: '60px',
    marginRight: '10px',
    verticalAlign: 'bottom',
    width: '60px',
  },
});

const JSONLogo = () => {
  const classes = useStyles();
  return (
    <Link to="/">
      <img
        alt="i18n Online Translations Editor (JSON)"
        className={classes.image}
        src={logo}
      />
    </Link>
  );
};

export default JSONLogo;
