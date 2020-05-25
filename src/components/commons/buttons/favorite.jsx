import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  AiFillPushpin as PinOnIcon,
  AiOutlinePushpin as PinOffIcon,
} from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import { toggleFavorite } from '../../../redux/actions';

const useStyles = createUseStyles({
  button: {
    display: 'block',
    height: 34,
    textAlign: 'center',
    width: 34,
  },
});

const FavoriteButtonComponent = React.memo(
  ({ className, id: project, isFavorite }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onToggleFavorite = useCallback(() => {
      dispatch(toggleFavorite({ project }));
    }, [dispatch, project]);

    return (
      <button
        className={classnames(classes.button, className)}
        type="button"
        onClick={onToggleFavorite}>
        {!isFavorite && <PinOffIcon className={classes.icon} />}
        {isFavorite && <PinOnIcon className={classes.icon} />}
      </button>
    );
  }
);

FavoriteButtonComponent.defaultProps = {
  className: '',
};

FavoriteButtonComponent.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default FavoriteButtonComponent;
