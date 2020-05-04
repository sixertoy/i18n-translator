import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from './logo';
import Menu from './menu';

const useStyles = createUseStyles({
  container: ({ theme }) => {
    const { blue, indigo, white } = theme.colors;
    return {
      background: `linear-gradient(119deg, ${blue} 35%, ${indigo} 100%)`,
      color: white,
      composes: ['is-relative', 'is-full-width'],
      height: 45,
      maxHeight: 45,
      minHeight: 45,
    };
  },
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
