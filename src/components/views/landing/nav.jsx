import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Brand from '../../layout/brand';

const useStyles = createUseStyles({
  nav: {
    background: 'transparent',
    composes: ['p16', 'flex-columns', 'flex-between', 'items-center'],
    height: 90,
    marginBottom: 100,
  },
  signin: ({ theme }) => ({
    background: theme.colors.transparent,
    color: theme.colors.white,
    composes: ['px24', 'py12', 'fs18'],
  }),
  signup: ({ theme }) => ({
    background: theme.colors.white,
    color: theme.colors.gradient[1],
    composes: ['px24', 'py12', 'fs18', 'ml3', 'no-underline', 'rnd3'],
  }),
});

const LandingNavComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <nav className={classes.nav}>
      <Brand />
      <div>
        <Link
          className={classes.signin}
          to={{ pathname: '/signin', state: { useSignup: false } }}>
          <span>Connexion</span>
        </Link>
        <Link
          className={classes.signup}
          to={{ pathname: '/signup', state: { useSignup: true } }}>
          <span>S&apos;inscrire</span>
        </Link>
      </div>
    </nav>
  );
});

export default LandingNavComponent;
