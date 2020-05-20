import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { RESPONSIVE_BREAKPOINT } from '../../../../constants';
import FavoriteButton from '../../buttons/favorite';

const useStyles = createUseStyles({
  container: {
    background: '#000000',
    composes: ['is-relative', 'rnd3', 'flex-1', 'mt0'],
    marginBottom: 3,
  },
  favorite: {
    height: 34,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 34,
  },
  link: {
    '&:hover': { textDecoration: 'none' },
    color: '#FFFFFF',
    composes: ['is-bold', 'is-block', 'fs16', 'p12'],
    width: '100%',
  },
  name: {
    composes: ['no-wrap', 'text-overflow', 'fs18', 'pr42', 'no-overflow'],
  },
  [`@media (max-width: ${RESPONSIVE_BREAKPOINT}px)`]: {
    container: {
      margin: '0 1% 1% 0',
      maxWidth: '49%',
      minWidth: '49%',
      width: '49%',
    },
    link: {
      height: 96,
    },
  },
});

const ProjectItemComponent = React.memo(({ data }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const url = `/board/${data.id}`;

  return (
    <li className={classnames(classes.container, 'fadein')}>
      <Link className={classes.link} to={url}>
        <div className={classes.name}>
          {data.name} sjdjsl djs jdlksjq dhsq kjdsqkdh{' '}
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
