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
import Grid from '../../commons/projects/grid';
import List from '../../commons/projects/list';
import withLayout from '../../layout';

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
  const { favorites, projects, recents } = useSelector(selectProjects);
  const historics = recents.slice(0, 10);

  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div className={classes.wrapper}>
          <div className={classes.grids}>
            <Grid icon={PinIcon} items={favorites} label="Projets épinglés" />
            <Grid
              icon={ProjectsIcon}
              items={projects}
              label="Tous vos projets"
            />
          </div>
          <div className={classes.lists}>
            <List
              icon={ClockIcon}
              items={historics}
              label="Récemment consultés"
            />
          </div>
        </div>
      </IfFirebaseAuthed>
    </div>
  );
});

export default withLayout(HomeViewComponent);
