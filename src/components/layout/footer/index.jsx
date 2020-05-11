import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { repository, version } from '../../../../package.json';
import Credits from './credits';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.black,
    composes: ['px32', 'pb0', 'pt12', 'fs8', 'is-uppercase'],
    letterSpacing: '0.12em',
  }),
  inner: {
    composes: ['is-relative'],
  },
  version: ({ theme }) => ({
    color: theme.colors.white,
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
        <Credits />
      </div>
    </div>
  );
});

export default ApplicationFooter;
