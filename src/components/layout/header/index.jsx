import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Brand from '../brand';
import Account from './account';
import Home from './home';
import Projects from './projects';

const useStyles = createUseStyles({
  brand: {
    fontSize: 10,
  },
  container: {
    background: `linear-gradient(90deg, #EE256B 0%, #FD7822 100%)`,
    width: '100%',
  },
  layer: {
    composes: [
      'p7',
      'flex-columns',
      'flex-between',
      'items-center',
      'is-relative',
    ],
  },
  menu: {
    composes: ['no-flex'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
});

const ApplicationHeaderComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.layer}>
        <div className={classes.menu}>
          <div className={classes.wrapper}>
            <Home />
            <Projects />
          </div>
        </div>
        <Brand className={classes.brand} />
        <Account />
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
