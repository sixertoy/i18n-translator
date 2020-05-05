import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Columns from './columns';
import Headers from './headers';
import Options from './options';

const useStyles = createUseStyles({
  board: {
    composes: ['flex-rows', 'flex-stretch'],
    height: '100%',
  },
  wrapper: {
    composes: ['flex-rows', 'px32', 'pt24'],
    height: '100%',
  },
});

const BoardViewComponent = () => {
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

export default BoardViewComponent;
