import React from 'react';
import { createUseStyles } from 'react-jss';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import withLayout from '../../layout';
// import Favorites from './favorites';
import Projects from './projects';
import Recents from './recents';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-1'],
    width: '100%',
  },
  grids: {
    composes: ['flex-1', 'is-relative', 'mr24'],
  },
  lists: {
    composes: ['flex-0'],
    maxWidth: 250,
    minWidth: 250,
    width: 250,
  },
  wrapper: {
    composes: ['flex-columns', 'is-relative'],
    margin: '0 auto',
    maxWidth: 960,
    padding: 24,
  },
  [`@media (max-width: ${680}px)`]: {
    grids: {
      marginRight: 0,
    },
    lists: {
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%',
    },
    wrapper: {
      flexDirection: 'column-reverse',
      padding: 12,
    },
  },
});

const HomeViewComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div className={classes.wrapper}>
          <div className={classes.grids}>
            <Projects />
          </div>
          <div className={classes.lists}>
            {/* <Favorites /> */}
            <Recents />
          </div>
        </div>
      </IfFirebaseAuthed>
    </div>
  );
});

export default withLayout(HomeViewComponent);
