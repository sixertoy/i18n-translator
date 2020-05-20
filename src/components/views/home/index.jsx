import React from 'react';
import {
  AiOutlineClockCircle as ClockIcon,
  AiOutlineProject as ProjectsIcon,
  AiOutlinePushpin as PinIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { selectProjects } from '../../../redux/selectors';
import withLayout from '../../layout';
import List from './list';

const useStyles = createUseStyles({
  container: {
    background: '#F1F1F1',
    composes: ['flex-1'],
  },
  layer: {
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
    margin: '0 auto',
    maxWidth: 720,
  },
});

const HomeViewComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { favorites, projects, recents } = useSelector(selectProjects);

  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div className={classes.layer}>
          <List icon={PinIcon} items={favorites} label="Projets épinglés" />
          <List icon={ClockIcon} items={recents} label="Récemment consultés" />
          <List icon={ProjectsIcon} items={projects} label="Tous vos projets" />
        </div>
      </IfFirebaseAuthed>
    </div>
  );
});

export default withLayout(HomeViewComponent);
