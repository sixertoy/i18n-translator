import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Logo from './logo';
import Menu from './menu';

const useStyles = createUseStyles({
  header: ({ theme }) => ({
    background: theme.header,
    height: 40,
    maxHeight: 40,
    minHeight: 40,
    width: '100%',
  }),
});

const ApplicationHeader = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.header}>
      <div className={classes.inner}>
        <Menu />
        <Logo />
        <div className="blank">&nbsp;</div>
      </div>
    </div>
  );
});

export default ApplicationHeader;
