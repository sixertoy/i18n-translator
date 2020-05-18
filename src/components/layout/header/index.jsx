import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Brand from '../brand';
import Account from './account';
import Menu from './menu';

const useStyles = createUseStyles({
  brand: {
    fontSize: 10,
  },
  container: {
    background: `linear-gradient(90deg, #EE256B 0%, #FD7822 100%)`,
    width: '100%',
  },
  layer: ({ theme }) => ({
    composes: [
      'px32',
      'flex-columns',
      'flex-between',
      'items-center',
      'is-relative',
    ],
    height: theme.sizes.header,
    maxHeight: theme.sizes.header,
    minHeight: theme.sizes.header,
  }),
});

const ApplicationHeaderComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.layer}>
        <Menu />
        <Brand className={classes.brand} />
        <Account />
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
