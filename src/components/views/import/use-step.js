import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { selectProject } from '../../../redux/selectors';

const useStep = () => {
  const { id } = useParams();
  const history = useHistory();
  const project = useSelector(_ => selectProject(_, id));

  useEffect(() => {
    if (id && !project) history.replace('/404');
  }, [history, id, project]);

  return { project };
};

export default useStep;
