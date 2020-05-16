import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/logo';

const useStyles = createUseStyles({
  brand: {
    composes: ['fs42', 'ml42'],
  },
  logo: ({ theme }) => ({
    '&:hover': { textDecoration: 'none !important' },
    color: theme.colors.white,
    composes: ['ff-lobster', 'is-relative', 'is-block'],
  }),
  nav: {
    background: 'transparent',
    composes: ['pb16', 'flex-columns', 'flex-between', 'items-center'],
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
  svg: {
    composes: ['fs38', 'mr5', 'is-absolute'],
    top: -10,
  },
});

const LandingNavComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <nav className={classes.nav}>
      <Link className={classes.logo} to="/">
        <Logo outlined className={classes.svg} />
        <span className={classes.brand}>Typpo</span>
      </Link>
      <div className={classes.buttons}>
        <Link className={classes.signin} to="/signin">
          <span>Connexion</span>
        </Link>
        <Link className={classes.signup} to="/signup">
          <span>S&apos;inscrire</span>
        </Link>
      </div>
    </nav>
  );
});

export default LandingNavComponent;
