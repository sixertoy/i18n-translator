import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import JSONLogo from './json-logo';
import Menu from './menu';

const useStyles = createUseStyles({
  container: {
    composes: [
      'flex-columns',
      'flex-between',
      'is-relative',
      'text-left',
      'items-center',
    ],
    height: 40,
    maxHeight: 40,
    minHeight: 40,
  },
  title: {
    composes: ['m0', 'fs20'],
    fontFamily: ['Cinzel', 'serif'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-center', 'items-center'],
  },
});

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div className="blank" />
      <div className={classes.wrapper}>
        <JSONLogo />
        <div>
          <h1 className={classes.title}>
            <span>i18n Online Translation Editor</span>
          </h1>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default ApplicationHeader;
