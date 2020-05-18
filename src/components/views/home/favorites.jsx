import isEmpty from 'lodash.isempty';
import React from 'react';
import { AiOutlineStar as StarIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectFavorites } from '../../../redux/selectors';
import Item from './item';

const useStyles = createUseStyles({
  container: {},
  title: {},
  wrapper: {},
});

const FavoritesComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const items = useSelector(selectFavorites);

  return (
    <div className={classes.favorites}>
      <h3 className={classes.title}>
        <StarIcon />
        <span>Vos Favoris</span>
      </h3>
      <div className={classes.wrapper}>
        {isEmpty(items) && <span>Aucun projets</span>}
        {items.map(obj => (
          <Item key={obj.id} data={obj} />
        ))}
      </div>
    </div>
  );
});

export default FavoritesComponent;
