import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Columns from './columns';
import Headers from './headers';
import Stats from './stats';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows'],
  },
  wrapper: {
    composes: ['m32', 'flex-1', 'flex-rows'],
  },
});

const BoardComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <Stats />
      <div className={classes.wrapper}>
        <Headers />
        <Columns />
      </div>
    </div>
  );
};

export default BoardComponent;
