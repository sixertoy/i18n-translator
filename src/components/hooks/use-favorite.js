import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFavorite } from '../../redux/actions';
import { selectProject } from '../../redux/selectors';

const useFavorite = project => {
  const { isFavorite } = useSelector(state => selectProject(state, project));

  const dispatch = useDispatch();
  const onToggleFavorite = useCallback(
    evt => {
      evt.preventDefault();
      dispatch(toggleFavorite({ project }));
    },
    [dispatch, project]
  );

  return { isFavorite, onToggleFavorite };
};

export default useFavorite;
