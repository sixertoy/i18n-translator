import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectPrimaryKeys } from '../../../redux/selectors';

const useStyles = createUseStyles({
  logo: {
    composes: ['debug', 'is-inline-block'],
    fill: '#FFFFFF',
    height: 18,
    width: 18,
  },
});

const LogoComponent = () => {
  const classes = useStyles();
  const keys = useSelector(selectPrimaryKeys);

  const [pathTo, setPathTo] = useState('/');

  useEffect(() => {
    const shouldGotoBoard = keys && keys.length > 0;
    if (shouldGotoBoard) setPathTo('/board');
  }, [keys]);

  return (
    <Link className={classes.logo} to={pathTo}>
      <svg viewBox="0 0 460 510" xmlns="http://www.w3.org/2000/svg">
        <path d="M445.012 379.743S328.102 157.52 96.302 51.1c0 0-8.877-3.389-10.99 5.01-2.113 8.398 8.14 9.715 13.988 15.029 5.85 5.313 196.923 114.895 345.712 360.705L460 496.972l-4.996 13.025-83.93-102.2s-208.598 7.279-298.751-159.311c0 0 63.373-18.325 80.932-17.034 0 0-44.299-29.872-98.917-18.035l-20.983-51.1s13.326-17.767 72.94-26.05c0 0-48.676-28.926-83.93-11.022v2.004S-3.422 43.024.383-.001c0 0 139.43 14.515 211.823 51.1 0 0-7.022 30.478 29.975 54.107 0 0-6.936-31.735 2.998-42.083 0 0 256.39 100.123 199.833 316.62z" />
      </svg>
    </Link>
  );
};

export default LogoComponent;
