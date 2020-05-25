import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { toggleFavorite } from '../../redux/actions';

const useFavorite = id => {
  const dispatch = useDispatch();

  const onToggleFavorite = useCallback(
    evt => {
      evt.preventDefault();
      dispatch(toggleFavorite({ project: id }));
    },
    [dispatch, id]
  );

  return onToggleFavorite;
};

export default useFavorite;
