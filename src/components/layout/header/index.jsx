import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Menu from './menu';
import Title from './title';

const useStyles = createUseStyles({
  header: ({ theme }) => ({
    background: theme.header,
    composes: [
      'flex-0',
      'flex-columns',
      'flex-between',
      'items-center',
      'px32',
    ],
    height: 40,
    maxHeight: 40,
    minHeight: 40,
  }),
});

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.header}>
      <Menu />
      <Title />
      <div className="blank">&nbsp;</div>
    </div>
  );
};

export default ApplicationHeader;
