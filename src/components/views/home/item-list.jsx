import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import FavoriteButton from '../../commons/buttons/favorite';
import useListStyles from './styles';

const useStyles = createUseStyles({
  [`@media (min-width: ${681}px)`]: {
    item: {
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%',
    },
    name: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    wrapper: {
      height: 'auto',
    },
  },
  [`@media (min-width: ${861}px)`]: {
    link: {
      fontSize: 16,
    },
  },
});

const ProjectItemComponent = React.memo(({ data }) => {
  const theme = useTheme();
  const queries = useStyles({ theme });
  const classes = useListStyles({ theme });

  const url = `/board/${data.id}`;

  return (
    <li className={classnames(classes.item, queries.item, 'fadein')}>
      <Link className={classnames(classes.link, queries.link)} to={url}>
        <div className={classnames(classes.wrapper, queries.wrapper)}>
          <span className={classnames(classes.name, queries.name)}>
            {data.name}
          </span>
        </div>
      </Link>
      <div className={classes.favorite}>
        <FavoriteButton id={data.id} isFavorite={data.isFavorite} />
      </div>
    </li>
  );
});

ProjectItemComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    isFavorite: PropTypes.bool,
    langs: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }).isRequired,
};

export default ProjectItemComponent;