import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from './logo';
import Menu from './menu';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['flex-columns', 'flex-between', 'items-center', 'px12'],
    height: 40,
    maxHeight: 40,
    minHeight: 40,
  }),
  title: {
    composes: ['fs24', 'flex-columns', 'is-bold'],
    fontFamily: ['Cinzel', 'serif'],
    opacity: 0.7,
  },
});

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div />
      <div>
        <h1 className={classes.title}>
          <Logo />
          <span>some</span>
        </h1>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default ApplicationHeader;
