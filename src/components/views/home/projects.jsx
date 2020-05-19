import isEmpty from 'lodash.isempty';
import React from 'react';
import { MdDashboard as ProjectsIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectProjects } from '../../../redux/selectors';
import Item from './item';

const useStyles = createUseStyles({
  container: {},
  title: {},
  wrapper: {},
});

const FavoritesComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { projects } = useSelector(selectProjects);

  return (
    <div className={classes.favorites}>
      <h3 className={classes.title}>
        <ProjectsIcon />
        <span>Tous vos projets</span>
      </h3>
      <div className={classes.wrapper}>
        {isEmpty(projects) && <span>Aucun projet</span>}
        {projects.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
      </div>
    </div>
  );
});

export default FavoritesComponent;
