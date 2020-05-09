import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Menu from './menu';
import Title from './title';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.header,
    composes: ['px32'],
    width: '100%',
  }),
  wrapper: ({ theme }) => ({
    composes: ['flex-columns', 'flex-center', 'items-center', 'is-relative'],
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
      <div className={classes.wrapper}>
        <Menu />
        <Title />
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
