import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  AiFillPushpin as PinIconOn,
  AiOutlinePushpin as PinIconOff,
} from 'react-icons/ai';
import { IoIosMenu as DragIcon } from 'react-icons/io';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import { useFavorite } from '../../hooks';
import useListStyles from './styles';

const useStyles = createUseStyles({
  item: {},
  [`@media (min-width: ${861}px)`]: {
    item: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
  },
});

const GridComponent = React.memo(({ data }) => {
  const { id, name } = data;
  const queries = useStyles();
  const classes = useListStyles();
  const { isFavorite } = useFavorite(id);

  return (
    <li className={classnames(classes.item, queries.item, 'fadein')}>
      <DragIcon className={classes.icon} />
      {isFavorite && (
        <PinIconOn className={classnames(classes.icon, classes.favorite)} />
      )}
      {!isFavorite && (
        <PinIconOff className={classnames(classes.icon, classes.favorite)} />
      )}
      <Link
        className={classnames(classes.link, queries.link)}
        to={`/board/${id}`}>
        <div className={classes.wrapper}>
          <span className={classes.name}>{name}</span>
        </div>
      </Link>
    </li>
  );
});

GridComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default GridComponent;
