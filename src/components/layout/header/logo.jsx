import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  container: {
    composes: ['text-center', 'fs24', 'is-absolute', 'use-lobster'],
    left: 0,
    lineHeight: 'inherit',
    margin: '0 auto',
    right: 0,
    width: 100,
  },
  link: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['is-block'],
  }),
});

const LogoComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <h1 className={classes.container} id="header-title">
      <Link className={classes.link} to="/">
        <span>Lobster</span>
      </Link>
    </h1>
  );
});

export default LogoComponent;
