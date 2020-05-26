import React from 'react';
import { AiFillHome as HomeIcon } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import useButtonStyles from './styles';

const HomeButtonComponent = React.memo(() => {
  const classes = useButtonStyles();
  return (
    <Link className={classes.button} to="/">
      <HomeIcon />
    </Link>
  );
});

export default HomeButtonComponent;
