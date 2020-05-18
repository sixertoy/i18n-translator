import isEmpty from 'lodash.isempty';
import uniq from 'lodash.uniq';
import React from 'react';
import { MdDashboard as ProjectsIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  selectFavorites,
  selectProjects,
  selectRecents,
} from '../../../redux/selectors';
import Item from './item';

const useStyles = createUseStyles({
  container: {},
  title: {},
  wrapper: {},
});

const FavoritesComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const recents = useSelector(selectRecents).map(obj => obj.id);
  const favorites = useSelector(selectFavorites).map(obj => obj.id);
  const mapped = uniq([...recents, ...favorites]);
  const projects = useSelector(selectProjects);
  const items = projects.filter(obj => !mapped.includes(obj.id));

  return (
    <div className={classes.favorites}>
      <h3 className={classes.title}>
        <ProjectsIcon />
        <span>Tous vos projets</span>
      </h3>
      <div className={classes.wrapper}>
        {isEmpty(items) && <span>Aucun projet</span>}
        {items.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
      </div>
    </div>
  );
});

export default FavoritesComponent;
