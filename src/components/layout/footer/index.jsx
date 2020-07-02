import React from 'react';
import { createUseStyles } from 'react-jss';

import { repository, version } from '../../../../package.json';
import { RESPONSIVE_BREAKPOINT } from '../../../constants';
import { rgba } from '../../../core/utils';

const useStyles = createUseStyles({
  container: {
    composes: ['px32', 'pb0', 'pt12', 'fs8', 'is-uppercase', 'is-relative'],
    letterSpacing: '0.12em',
  },
  version: {
    color: rgba('#000000', 0.35),
  },
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
  const classes = useStyles();
  return (
    <div className={classes.container} id="layout-footer">
      <a className={classes.version} href={repository.url}>
        <span>
          v{version} - Typpo <span>- i18n online translation editor</span>
        </span>
      </a>
    </div>
  );
});

export default ApplicationFooter;
