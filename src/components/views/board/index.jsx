import React, { useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import withLayout from '../../layout';
import Options from './options';
import Table from './table';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'is-relative', 'is-full-layout'],
  },
  scroller: {
    composes: ['is-relative', 'flex-1'],
    height: 'auto',
    overflow: 'auto',
    width: '100%',
  },
});

const BoardViewComponent = React.memo(() => {
  const scroller = useRef(null);

  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} id="board-view">
      <Options />
      <div ref={scroller} className={classes.scroller}>
        <Table scroller={scroller} />
      </div>
    </div>
  );
});

export default withLayout(BoardViewComponent);
