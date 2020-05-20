import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import FavoriteButton from '../../commons/buttons/favorite';

const useStyles = createUseStyles({
  container: {
    background: '#000000',
    composes: ['is-relative', 'rnd3', 'flex-1'],
    margin: '0 1% 1% 0',
    maxWidth: '32%',
    minWidth: '32%',
    width: '32%',
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
    composes: ['is-bold', 'is-block', 'fs20', 'p12'],
    height: 96,
    width: '100%',
  },
  name: {
    marginRight: 40,
  },
});

const ProjectItemComponent = React.memo(({ data }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const url = `/board/${data.id}`;

  return (
    <li className={classnames(classes.container, 'fadein')}>
      <Link className={classes.link} to={url}>
        <div className={classes.wrapper}>
          <span className={classes.name}>{data.name}</span>
          <span>{data.langs.length}</span>
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
