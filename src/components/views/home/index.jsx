import React from 'react';
import {
  AiOutlineProject as ProjectsIcon,
  AiOutlinePushpin as PinIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import { rgba } from '../../../core/utils';
import { selectProjects } from '../../../redux/selectors';
import withLayout from '../../layout';
import List from './list';

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
  const classes = useStyles({ theme });
  const { favorites, projects } = useSelector(selectProjects);

  return (
    <div className={classes.container} id="home-view">
      <IfFirebaseUnAuthed>
        <Redirect to="/" />
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        <div className={classes.layer}>
          <List icon={PinIcon} items={favorites} label="Projets épinglés" />
          <List icon={ProjectsIcon} items={projects} label="Tous vos projets" />
        </div>
      </IfFirebaseAuthed>
    </div>
  );
});

HomeViewComponent.defaultProps = {};

HomeViewComponent.propTypes = {};

export default withLayout(HomeViewComponent);
