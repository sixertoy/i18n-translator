import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { repository, version } from '../../../../package.json';
import { rgba } from '../../../core/utils';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.app.container,
  }),
  credits: ({ theme }) => ({
    background: theme.table.odd,
    borderRadius: `${theme.radius.small}px ${theme.radius.small}px 0 0`,
    bottom: 0,
    composes: ['is-uppercase', 'pb0', 'pt5', 'px12', 'is-absolute'],
    right: 32,
  }),
  layer: ({ theme }) => ({
    background: rgba(theme.app.layer, 0.95),
    composes: ['px32', 'pb0', 'pt12', 'fs8', 'is-uppercase', 'is-relative'],
    letterSpacing: '0.12em',
  }),
  love: ({ theme }) => ({
    color: theme.colors.red,
  }),
  version: ({ theme }) => ({
    color: rgba(theme.colors.black, 0.35),
  }),
});

const ApplicationFooter = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-footer">
      <div className={classes.layer}>
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
