import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from './logo';
import Menu from './menu';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.blue,
    color: theme.colors.white,
    composes: ['flex-columns', 'flex-between', 'items-center', 'px12'],
    height: 40,
    maxHeight: 40,
    minHeight: 40,
  }),
  title: {
    composes: ['fs20'],
    fontFamily: ['Cinzel', 'serif'],
  },
});

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div>
        <Logo />
      </div>
      <div>
        <h1 className={classes.title}>
          <span>i18n Online Translation Editor</span>
        </h1>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default ApplicationHeader;
