import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from './logo';
import Menu from './menu';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.header,
    composes: ['is-relative'],
    width: '100%',
  }),
  wrapper: ({ theme }) => ({
    composes: ['flex-columns', 'flex-center', 'items-center', 'px32'],
    height: theme.sizes.header,
    maxHeight: theme.sizes.header,
    minHeight: theme.sizes.header,
  }),
});

const ApplicationHeader = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.wrapper}>
        <Menu />
        <Logo />
        <div className="blank">&nbsp;</div>
      </div>
    </div>
  );
});

export default ApplicationHeader;
