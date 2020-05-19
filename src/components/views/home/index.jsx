import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { rgba } from '../../../core/utils';
import { createProjectAsync } from '../../../redux/actions';
import withLayout from '../../layout';
import BigButton from './big-button';
import Favorites from './favorites';
import Projects from './projects';
import Recents from './recents';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    background: theme.app.container,
    composes: ['flex-1'],
  }),
  layer: ({ theme }) => ({
    background: rgba(theme.app.layer, 0.95),
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
    paddingLeft: 300,
  }),
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });

  const onCreateClick = useCallback(() => {
    dispatch(createProjectAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div className={classes.layer}>
          <button type="button" onClick={onCreateClick}>
            <span>Créer un projet</span>
          </button>
          <Favorites />
          <Recents />
          <Projects />
          <BigButton />
        </div>
      </IfFirebaseAuthed>
    </div>
  );
});

HomeViewComponent.defaultProps = {};

HomeViewComponent.propTypes = {};

export default withLayout(HomeViewComponent);
