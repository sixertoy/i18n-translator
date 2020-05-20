import React from 'react';
import {
  AiOutlineProject as ProjectsIcon,
  AiOutlinePushpin as PinIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { RESPONSIVE_BREAKPOINT } from '../../../constants';
import { selectFavorites, selectProjects } from '../../../redux/selectors';
import Grid from '../../commons/projects/grid';

const useStyles = createUseStyles({
  grids: {
    '& > * + *': { marginTop: 24 },
    composes: ['flex-1', 'is-relative', 'mr24'],
  },
  [`@media (max-width: ${RESPONSIVE_BREAKPOINT}px)`]: {
    grids: {
      marginRight: 0,
    },
  },
});

const GridsComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const projects = useSelector(selectProjects);
  const favorites = useSelector(selectFavorites);
  return (
    <div className={classes.grids}>
      <Grid icon={PinIcon} items={favorites} label="Projets épinglés" />
      <Grid icon={ProjectsIcon} items={projects} label="Tous vos projets" />
    </div>
  );
});

export default GridsComponent;
