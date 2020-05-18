import isEmpty from 'lodash.isempty';
import uniq from 'lodash.uniq';
import React from 'react';
import { AiOutlineStar as StarIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import {
  selectFavorites,
  selectProjects,
  selectRecents,
} from '../../../redux/selectors';

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
        <StarIcon />
        <span>Récemment modifiés</span>
      </h3>
      <div className={classes.wrapper}>
        {isEmpty(items) && <span>Aucun projets</span>}
        {items.map(obj => {
          return <div key={obj.id}>{obj.name}</div>;
        })}
      </div>
    </div>
  );
});

export default FavoritesComponent;
