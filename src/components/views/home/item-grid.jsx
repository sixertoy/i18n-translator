import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import FavoriteButton from '../../commons/buttons/favorite';
import useListStyles from './styles';

const useStyles = createUseStyles({
  [`@media (min-width: ${861}px)`]: {
    queryItem: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
    queryLink: {
      fontSize: 20,
    },
  },
  [`@media (max-width: ${981}px)`]: {
    queryLink: {
      fontSize: 18,
    },
  },
});

const GridComponent = React.memo(({ data }) => {
  const theme = useTheme();
  const queries = useStyles({ theme });
  const classes = useListStyles({ theme });

  const url = `/board/${data.id}`;

  return (
    <li className={classnames(classes.item, queries.item, 'fadein')}>
      <Link className={classnames(classes.link, queries.link)} to={url}>
        <div className={classes.wrapper}>
          <span className={classes.name}>{data.name}</span>
        </div>
      </Link>
      <div className={classes.favorite}>
        <FavoriteButton id={data.id} isFavorite={data.isFavorite} />
      </div>
    </li>
  );
});

GridComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    isFavorite: PropTypes.bool,
    langs: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }).isRequired,
};

export default GridComponent;
