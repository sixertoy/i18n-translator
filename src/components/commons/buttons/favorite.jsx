import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiTwotonePushpin as PinIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import { useFavorite } from '../../hooks';

const useStyles = createUseStyles({
  button: {
    '&:hover': { background: 'hsla(0, 0%, 100%, 0.1)' },
    background: 'hsla(0, 0%, 100%, 0.06)',
    borderRadius: '50%',
    display: 'block',
    height: 40,
    textAlign: 'center',
    transition: 'background 0.3s',
    width: 40,
  },
  icon: {
    '& path': {
      color: 'rgba(255, 255, 255, 0)',
      transition: 'color 0.3s',
    },
    '& path + path': { color: '#FFFFFF' },
    '&.active path': { color: '#FFFFFF' },
  },
});

const FavoriteButtonComponent = React.memo(({ className, project }) => {
  const classes = useStyles();
  const { isFavorite, onToggleFavorite } = useFavorite(project);

  return (
    <button
      className={classnames(classes.button, className)}
      type="button"
      onClick={onToggleFavorite}>
      <PinIcon className={classnames(classes.icon, { active: isFavorite })} />
    </button>
  );
});

FavoriteButtonComponent.defaultProps = {
  className: '',
};

FavoriteButtonComponent.propTypes = {
  className: PropTypes.string,
  project: PropTypes.string.isRequired,
};

export default FavoriteButtonComponent;
