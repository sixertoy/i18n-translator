import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../../assets/json_logo.svg';
import { selectPrimaryKeys } from '../../../redux/selectors';

const useStyles = createUseStyles({
  image: {
    height: 20,
    marginRight: 10,
    opacity: 0.4,
    verticalAlign: 'bottom',
    width: 20,
  },
});

const JSONLogo = () => {
  const classes = useStyles();
  const keys = useSelector(selectPrimaryKeys);

  const [pathTo, setPathTo] = useState('/');

  useEffect(() => {
    const shouldGotoBoard = keys && keys.length > 0;
    if (shouldGotoBoard) setPathTo('/board');
  }, [keys]);

  return (
    <Link to={pathTo}>
      <img
        alt="i18n Online Translations Editor (JSON)"
        className={classes.image}
        src={logo}
      />
    </Link>
  );
};

export default JSONLogo;
