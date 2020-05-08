import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import withLayout from '../../layout';
import Options from './options';
import Table from './table';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'is-relative', 'is-full-layout'],
  },
  wrapper: {
    composes: ['is-relative', 'flex-1'],
    height: 'auto',
    overflow: 'auto',
    width: '100%',
  },
});

const BoardViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="board-view">
      <Options />
      <div className={classes.wrapper}>
        <Table />
      </div>
    </div>
  );
};

export default withLayout(BoardViewComponent);
