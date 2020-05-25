import classnames from 'classnames';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Brand from '../../layout/brand';

const useStyles = createUseStyles({
  link: {
    composes: ['is-block', 'ml3', 'py12', 'px24', 'fs18'],
  },
  nav: {
    background: 'transparent',
    boxSizing: 'content-box',
    composes: ['flex-columns', 'flex-between', 'items-center'],
    height: 50,
    maxHeight: 50,
    minHeight: 50,
    position: 'sticky',
    top: 0,
  },
  signin: {
    color: '#FFFFFF',
    composes: ['no-background'],
  },
  signup: ({ theme }) => ({
    background: '#FFFFFF',
    color: theme.colors.gradient[1],
    composes: ['no-underline', 'rnd3'],
  }),
  title: {
    composes: ['fs12', 'flex-1'],
  },
  wrapper: {
    alignSelf: 'flex-end',
    composes: ['flex-columns', 'flex-end', 'items-center'],
  },
  [`@media (max-width: ${600}px)`]: {
    link: { fontSize: 12, padding: 12 },
    title: { fontSize: 10 },
  },
});

const LandingNavComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <nav className={classes.nav}>
      <Brand className={classes.title} />
      <div className={classes.wrapper}>
        <Link className={classnames(classes.signin, classes.link)} to="/signin">
          <span>Connexion</span>
        </Link>
        <Link className={classnames(classes.signup, classes.link)} to="/signup">
          <span>S&apos;inscrire</span>
        </Link>
      </div>
    </nav>
  );
});

export default LandingNavComponent;
