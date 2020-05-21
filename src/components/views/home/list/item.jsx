import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import FavoriteButton from '../../../commons/buttons/favorite';

const useStyles = createUseStyles({
  favorite: {
    height: 34,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 34,
  },
  item: {
    background: '#000000',
    composes: ['is-relative', 'rnd3', 'flex-1'],
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
  },
  link: {
    '&:hover': { textDecoration: 'none' },
    color: '#FFFFFF',
    composes: ['is-bold', 'is-block'],
    fontSize: 14,
    lineHeight: '1.3em',
    width: '100%',
  },
  name: {
    composes: ['is-block', 'no-overflow'],
    maxHeight: '100%',
  },
  wrapper: {
    composes: ['py12', 'pl12', 'no-overflow'],
    height: 96,
    paddingRight: 30,
  },
  [`@media (min-width: ${861}px)`]: {
    link: {
      fontSize: 16,
    },
  },
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
});

const ProjectItemComponent = React.memo(({ data }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const url = `/board/${data.id}`;

  return (
    <li className={classnames(classes.item, 'fadein')}>
      <Link className={classes.link} to={url}>
        <div className={classes.wrapper}>
          <span className={classes.name}>
            {data.name} sjdjsl djs jdlksjq dhsq kjdsqkd kjdsqkdkdhkjdsqkdh hq
            sjdjsl djs jdlksjq dhsq kjdsqkd
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
