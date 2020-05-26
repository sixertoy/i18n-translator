import React from 'react';
import {
  AiOutlineClockCircle as ClockIcon,
  AiOutlineProject as ProjectsIcon,
  AiOutlinePushpin as PinIcon,
} from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import {
  selectFavorites,
  selectProjects,
  selectRecents,
} from '../../../redux/selectors';
import withLayout from '../../layout';
import Factory from './item-factory';

const useStyles = createUseStyles({
  container: {
    background: '#F1F1F1',
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
  const projects = useSelector(selectProjects);
  const favorites = useSelector(selectFavorites);
  const recents = useSelector(selectRecents);
  const historics = recents.slice(0, 8);
  const showFavorites = projects.length > 0;

  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div className={classes.wrapper}>
          <div className={classes.grids}>
            {showFavorites && (
              <Factory
                useGrid
                icon={PinIcon}
                items={favorites}
                label="Épinglés"
              />
            )}
            <Factory
              useBlank
              useGrid
              icon={ProjectsIcon}
              items={projects}
              label="Vos projets"
            />
          </div>
          <div className={classes.lists}>
            <Factory
              icon={ClockIcon}
              items={historics}
              label="Récemment consultés"
              useEmpty={!historics || historics.length <= 0}
            />
          </div>
        </div>
      </IfFirebaseAuthed>
    </div>
  );
});

export default withLayout(HomeViewComponent);
