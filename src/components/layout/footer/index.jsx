import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { repository, version } from '../../../../package.json';
import { RESPONSIVE_BREAKPOINT } from '../../../constants';
import { rgba } from '../../../core/utils';

const useStyles = createUseStyles({
  container: {
    background: '#F1F1F1',
    composes: ['px32', 'pb0', 'pt12', 'fs8', 'is-uppercase', 'is-relative'],
    letterSpacing: '0.12em',
  },
  credits: ({ theme }) => ({
    background: theme.table.odd,
    borderRadius: `3px 3px 0 0`,
    bottom: 0,
    composes: ['is-uppercase', 'pb0', 'pt5', 'px12', 'is-absolute'],
    right: 32,
  }),
  love: ({ theme }) => ({
    color: theme.colors.red,
  }),
  version: ({ theme }) => ({
    color: rgba(theme.colors.black, 0.35),
  }),
  [`@media (max-width: ${RESPONSIVE_BREAKPOINT}px)`]: {
    version: {
      '& span span': {
        display: 'none',
        visibility: 'hidden',
      },
    },
  },
});

const ApplicationFooter = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-footer">
      <a className={classes.version} href={repository.url}>
        <span>
          v{version} - Typpo <span>- i18n online translation editor</span>
        </span>
      </a>
      <div className={classes.credits}>
        Made with <span className={classes.love}>♥</span> and React
      </div>
    </div>
  );
});

export default ApplicationFooter;
