import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import withLayout from '../../layout';
import Menu from './menu';
import Table from './table';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'is-relative'],
    height: 'auto',
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
  table: {
    composes: ['flex-columns', 'flex-start'],
  },
});

const BoardViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="board-view">
      <Menu />
      <Table />
    </div>
  );
};

export default withLayout(BoardViewComponent);
