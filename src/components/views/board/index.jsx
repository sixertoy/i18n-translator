import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Columns from './columns';
import Headers from './headers';
import Options from './options';

const useStyles = createUseStyles({
  board: {
    composes: ['debug', 'flex-rows', 'flex-stretch'],
    height: '100%',
  },
  wrapper: {
    composes: ['debug', 'flex-rows'],
    height: '100%',
  },
});

const BoardComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.board}>
      <Options />
      <div className={classes.wrapper}>
        <Headers />
        <Columns />
      </div>
    </div>
  );
};

export default BoardComponent;
