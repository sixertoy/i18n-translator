import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import withLayout from '../../layout';
import Columns from './columns';
import Headers from './headers';
import Options from './options';

const useStyles = createUseStyles({
  container: {
    composes: [],
    height: '100%',
    width: '100%',
  },
  table: {
    height: '100%',
    width: '100%',
  },
});

const BoardViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="board-view">
      <Options />
      <div className={classes.table}>
        <Headers />
        <Columns />
      </div>
    </div>
  );
};

export default withLayout(BoardViewComponent);
