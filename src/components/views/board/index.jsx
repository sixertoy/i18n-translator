import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Columns from './columns';
import Headers from './headers';

const useStyles = createUseStyles({
  container: {
    // background: theme.colors.grey,
    composes: ['flex-rows', 'py48', 'pl48'],
  },
  headers: {
    composes: ['flex-0'],
  },
  scrollboxWrapper: {
    composes: ['is-scrollbox-wrapper', 'flex-1'],
  },
});

const BoardComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div className={classes.headers}>
        <Headers />
      </div>
      <div className={classes.scrollboxWrapper}>
        <Columns />
      </div>
    </div>
  );
};

export default BoardComponent;
