import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Account from './account';
import Menu from './menu';
import Title from './title';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.colors.grey,
    width: '100%',
  }),
  layer: ({ theme }) => ({
    background: theme.colors.grey,
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
        <Title />
        <Account />
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
