import React from 'react';
import {
  AiOutlineProject as ProjectsIcon,
  AiOutlinePushpin as PinIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectProjects } from '../../../redux/selectors';
import Grid from '../../commons/projects/grid';

const useStyles = createUseStyles({
  grids: {
    composes: ['flex-rows', 'is-relative'],
    height: '100%',
    margin: '0 auto',
    maxWidth: 720,
  },
});

const GridsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { favorites, projects } = useSelector(selectProjects);

  return (
    <div className={classes.grids}>
      <Grid icon={PinIcon} items={favorites} label="Projets épinglés" />
      <Grid icon={ProjectsIcon} items={projects} label="Tous vos projets" />
    </div>
  );
});

export default GridsComponent;
