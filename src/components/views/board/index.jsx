import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import withLayout from '../../layout';
import Options from './options';
import Table from './table';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'is-relative'],
    height: 'auto',
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
});

const BoardViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="board-view">
      <Options />
      <Table scroll={{ x: 0, y: 0 }} />
    </div>
  );
};

export default withLayout(BoardViewComponent);
