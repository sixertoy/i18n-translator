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
    height: '100%',
    width: '100%',
  },
  wrapper: {
    composes: ['flex-columns', 'is-relative', 'p24'],
    margin: '0 auto',
    maxWidth: 960,
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
