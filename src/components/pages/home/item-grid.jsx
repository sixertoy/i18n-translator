import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import FavoriteButton from '../../commons/buttons/favorite';
import useListStyles from './styles';

const useStyles = createUseStyles({
  item: {},
  link: {},
  [`@media (min-width: ${861}px)`]: {
    item: {
      maxWidth: '32%',
      minWidth: '32%',
      width: '32%',
    },
    link: { fontSize: 20 },
  },
  [`@media (max-width: ${981}px)`]: {
    link: { fontSize: 18 },
  },
});

const GridComponent = React.memo(({ data }) => {
  const queries = useStyles();
  const classes = useListStyles();

  const { id, name } = data;
  const url = `/board/${id}`;

  return (
    <li className={classnames(classes.item, queries.item, 'fadein')}>
      <Link className={classnames(classes.link, queries.link)} to={url}>
        <div className={classes.wrapper}>
          <span className={classes.name}>{name}</span>
        </div>
      </Link>
      <div className={classes.favorite}>
        <FavoriteButton project={id} />
      </div>
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
