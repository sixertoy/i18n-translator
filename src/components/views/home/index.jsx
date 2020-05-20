import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import withLayout from '../../layout';
import Grids from './grids';
import Lists from './lists';

const useStyles = createUseStyles({
  container: {
    background: '#F1F1F1',
    composes: ['flex-1'],
  },
  grids: {
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
    margin: '0 auto',
    maxWidth: 720,
  },
  lists: {
    height: '100%',
    maxWidth: 250,
  },
  wrapper: {
    composes: ['flex-columns', 'is-relative'],
  },
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div className={classes.wrapper}>
          <Grids />
          <Lists />
        </div>
      </IfFirebaseAuthed>
    </div>
  );
});

export default withLayout(HomeViewComponent);
