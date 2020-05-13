import React, { useCallback, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { rgba } from '../../../core/utils';
import withLayout from '../../layout';
import BigButton from './big-button';
import Options from './options';
import Table from './table';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.app.container,
    composes: ['flex-1'],
  }),
  layer: ({ theme }) => ({
    background: rgba(theme.app.layer, 0.95),
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
  }),
  scroller: {
    composes: ['is-relative', 'flex-1'],
    height: 'auto',
    overflow: 'auto',
    width: '100%',
  },
});

export function getScrollPositionY(key, margin = 0) {
  const scrollid = `scroll::${key}`;
  const target = document.getElementById(scrollid);
  const top = target.offsetTop - margin;
  if (top >= 0) return top;
  return 0;
}

const BoardViewComponent = React.memo(() => {
  const scroller = useRef(null);

  const theme = useTheme();
  const classes = useStyles({ theme });

  const scrollTo = useCallback(
    key => {
      const { current } = scroller;
      if (!current) return;
      const top = getScrollPositionY(key, theme.sizes.colheader);
      current.scrollTo({ behavior: 'smooth', left: 0, top });
    },
    [theme.sizes.colheader]
  );

  return (
    <div className={classes.container} id="board-view">
      <div className={classes.layer}>
        <Options />
        <div ref={scroller} className={classes.scroller}>
          <Table scroller={scroller} />
        </div>
        <BigButton scrollTo={scrollTo} />
      </div>
    </div>
  );
});

export default withLayout(BoardViewComponent);
