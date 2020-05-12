import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// import { DEFAULT_LANGUAGES } from '../../../constants';
import { selectProject } from '../../../redux/selectors';

const useStep = () => {
  const history = useHistory();
  const { id, index } = useParams();
  const project = useSelector(_ => selectProject(_, id));
  const [step, setStep] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    const current = Number(index);
    if (!project || Number.isNaN(current)) history.replace('/404');
    setStep(current);
    setNext(`/import/${id}/step/${step + 1}`);
  }, [history, id, index, project, step]);

  return { next, project: id, step };
};

export default useStep;
