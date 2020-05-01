import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { version } from '../../../package.json';

const useStyles = createUseStyles({
  baseline: {
    composes: ['mr3'],
  },
  container: {
    composes: ['flex-columns', 'flex-end', 'px32', 'py0'],
  },
  love: ({ theme }) => ({
    color: theme.colors.red,
  }),
  splitter: {
    composes: ['mx12'],
  },
  version: ({ theme }) => ({
    color: theme.colors.dark,
  }),
  wrapper: {
    background: '#FFFFFF',
    borderRadius: '4px 4px 0 0',
    color: '#A0A0A0',
    composes: ['fs8'],
    letterSpacing: '0.12em',
    lineHeight: '2.8em',
    padding: '0 12px',
    textTransform: 'uppercase',
  },
});

const ApplicationFooter = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <span className={classes.wrapper}>
        <span className={classes.version}>{`v${version}`}</span>
        <span className={classes.splitter}>-</span>
        <span className={classes.baseline}>
          Made with <span className={classes.love}>♥</span> and React
        </span>
      </span>
    </div>
  );
};

export default ApplicationFooter;