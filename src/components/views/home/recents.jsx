import isEmpty from 'lodash.isempty';
import React from 'react';
import { AiOutlineClockCircle as ClockIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectRecents } from '../../../redux/selectors';
import Item from './item';

const useStyles = createUseStyles({
  container: {},
  title: {},
  wrapper: {},
});

const FavoritesComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const items = useSelector(selectRecents);

  return (
    <div className={classes.favorites}>
      <h3 className={classes.title}>
        <ClockIcon />
        <span>Récemment modifiés</span>
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
