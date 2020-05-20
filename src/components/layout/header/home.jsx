import React from 'react';
import { AiFillHome as HomeIcon } from 'react-icons/ai';
import { useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import useButtonStyles from './styles';

const HomeButtonComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useButtonStyles({ theme });
  return (
    <Link className={classes.button} to="/">
      <HomeIcon />
    </Link>
  );
});

export default HomeButtonComponent;
