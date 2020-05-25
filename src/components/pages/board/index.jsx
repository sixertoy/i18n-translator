import React, { useCallback, useEffect, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import { IfFirebaseUnAuthed } from '../../../core/firebase';
import { updateProjectTime } from '../../../redux/actions';
import { selectProject } from '../../../redux/selectors';
import Loader from '../../commons/loader';
import { useMounted } from '../../hooks';
import withLayout from '../../layout';
import BigButton from './big-button';
import Options from './options';
import Table from './table';

const useStyles = createUseStyles({
  container: {
    background: '#F1F1F1',
    composes: ['flex-1'],
  },
  layer: {
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
  },
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { mounted } = useMounted();

  const project = useSelector(state => selectProject(state, id));

  const scrollTo = useCallback(
    key => {
      const { current } = scroller;
      if (!current) return;
      const top = getScrollPositionY(key, theme.sizes.colheader);
      current.scrollTo({ behavior: 'smooth', left: 0, top });
    },
    [theme.sizes.colheader]
  );

  useEffect(() => {
    if (!mounted) {
      dispatch(updateProjectTime({ project: id }));
    }
  });

  return (
    <div className={classes.container} id="board-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <div className={classes.layer}>
        {!mounted && <Loader />}
        {mounted && !project && <span>Show an unicorn</span>}
        {mounted && project && (
          <React.Fragment>
            <Options />
            <div ref={scroller} className={classes.scroller}>
              <Table scroller={scroller} />
            </div>
            <BigButton scrollTo={scrollTo} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
});

export default withLayout(BoardViewComponent);
