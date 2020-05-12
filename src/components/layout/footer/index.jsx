import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { repository, version } from '../../../../package.json';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.lighter,
    composes: ['px32', 'pb0', 'pt12', 'fs8', 'is-uppercase'],
    letterSpacing: '0.12em',
  }),
  credits: ({ theme }) => ({
    background: theme.colors.white,
    borderRadius: `${theme.radius.small}px ${theme.radius.small}px 0 0`,
    bottom: 0,
    composes: ['is-uppercase', 'pb0', 'pt5', 'px12', 'is-absolute'],
    right: 32,
  }),
  inner: {
    composes: ['is-relative'],
  },
  love: ({ theme }) => ({
    color: theme.colors.love,
  }),
  version: ({ theme }) => ({
    color: theme.colors.darker,
  }),
});

const ApplicationFooter = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-footer">
      <div className={classes.inner}>
        <a className={classes.version} href={repository.url}>
          <span>v{version} - i18n Online Translation Editor</span>
        </a>
        <div className={classes.credits}>
          Made with <span className={classes.love}>♥</span> and React
        </div>
      </div>
    </div>
  );
});

export default ApplicationFooter;
