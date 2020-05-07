import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from './logo';
import Menu from './menu';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.header,
    height: theme.sizes.header,
    maxHeight: theme.sizes.header,
    minHeight: theme.sizes.header,
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: theme.depths.header,
  }),
});

const ApplicationHeader = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.inner}>
        <Menu />
        <Logo />
        <div className="blank">&nbsp;</div>
      </div>
    </div>
  );
});

export default ApplicationHeader;
