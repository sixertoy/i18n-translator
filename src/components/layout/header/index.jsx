import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Menu from './menu';
import Title from './title';

const useStyles = createUseStyles({
  header: {
    composes: ['flex-0', 'debug'],
  },
});

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.header}>
      <Title />
      <Menu />
    </div>
  );
};

export default ApplicationHeader;
