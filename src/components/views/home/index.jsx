import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Redirect } from 'react-router-dom';

import { RESPONSIVE_BREAKPOINT } from '../../../constants';
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import withLayout from '../../layout';
import Grids from './grids';
import Lists from './lists';

const useStyles = createUseStyles({
  container: {
    background: '#F1F1F1',
    composes: ['flex-1'],
    width: '100%',
  },
  wrapper: {
    composes: ['flex-columns', 'is-relative'],
    margin: '0 auto',
    maxWidth: 960,
    padding: 24,
  },
  [`@media (max-width: ${RESPONSIVE_BREAKPOINT}px)`]: {
    wrapper: {
      flexDirection: 'column-reverse',
      padding: 12,
    },
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
