import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { commitDraftAsync, updateDraft } from '../../../redux/actions';
import { selectDraft } from '../../../redux/selectors';

const useStep = current => {
  const history = useHistory();
  const dispatch = useDispatch();
  const draft = useSelector(selectDraft);
  const { id } = draft;

  const onCommitDraft = useCallback(() => {
    dispatch(commitDraftAsync(draft)).then(() => {
      const url = `/board/${id}`;
      history.replace(url);
    });
  }, [dispatch, draft, history, id]);

  const onStepChange = useCallback(
    obj => {
      dispatch(updateDraft(obj));
      const url = `/import/${id}/step/${current + 1}`;
      history.push(url);
    },
    [id, current, dispatch, history]
  );

  return { draft, onCommitDraft, onStepChange };
};

export default useStep;
