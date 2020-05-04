import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from './logo';
import Menu from './menu';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['is-relative', 'is-full-width'],
    height: 40,
    maxHeight: 40,
    minHeight: 40,
  }),
  title: {
    composes: ['fs24', 'text-center', 'is-bold'],
    fontFamily: ['Cinzel', 'serif'],
    opacity: 1,
  },
});

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        <Logo />
        <span>some</span>
      </h1>
      <Menu />
    </div>
  );
};

export default ApplicationHeader;
