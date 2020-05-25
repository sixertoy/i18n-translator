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
      const next = `/board/${draft.id}`;
      history.replace(next);
    });
  }, [dispatch, draft, history]);

  const onStepChange = useCallback(
    obj => {
      dispatch(updateDraft(obj));
      const next = `/import/${id}/step/${current + 1}`;
      history.push(next);
    },
    [id, current, dispatch, history]
  );

  return { draft, onCommitDraft, onStepChange };
};

export default useStep;
