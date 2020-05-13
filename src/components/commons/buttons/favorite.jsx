import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiFillStar as FavOn, AiOutlineStar as FavOff } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { toggleFavorite } from '../../../redux/actions';

const useStyles = createUseStyles({
  button: {},
});

const FavoriteButtonComponent = React.memo(({ className, id, isFavorite }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const onToggleFavorite = useCallback(() => {
    dispatch(toggleFavorite({ project: id }));
  }, [dispatch, id]);

  return (
    <button
      className={classnames(classes.button, className)}
      type="button"
      onClick={onToggleFavorite}>
      {!isFavorite && <FavOff className={classes.icon} />}
      {isFavorite && <FavOn className={classes.icon} />}
    </button>
  );
});

FavoriteButtonComponent.defaultProps = {
  className: '',
};

FavoriteButtonComponent.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default FavoriteButtonComponent;
