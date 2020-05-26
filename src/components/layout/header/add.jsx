import React, { useCallback } from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { createDraftAsync } from '../../../redux/actions';
import useButtonStyles from './styles';

const AddButtonComponent = React.memo(() => {
  const classes = useButtonStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const canAddProject = !(pathname.indexOf('/import') === 0);

  const onCreateClick = useCallback(() => {
    dispatch(createDraftAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return (
    <button
      className={classes.button}
      disabled={!canAddProject}
      type="button"
      onClick={onCreateClick}>
      <PlusIcon />
    </button>
  );
});

export default AddButtonComponent;
