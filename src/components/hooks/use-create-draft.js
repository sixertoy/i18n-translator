import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDraftAsync } from '../../redux/actions';

const useCreateDraft = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onCreateDraft = useCallback(() => {
    dispatch(createDraftAsync()).then(id => {
      const url = `/import/${id}/step/1`;
      history.push(url);
    });
  }, [dispatch, history]);

  return onCreateDraft;
};

export default useCreateDraft;
