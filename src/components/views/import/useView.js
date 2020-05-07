import get from 'lodash.get';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const steps = [
  { label: 'Commencer', path: '/import/start' },
  { label: 'Langue', path: '/import/select' },
  { label: 'Importer', path: '/import/editor' },
  { label: 'Finish', path: '/import/finish' },
  { label: 'Board', path: '/board' },
];

function getPathByStepIndex(index) {
  const path = get(steps, `${index}.path`);
  return path;
}

function getStepIndexByPath(location) {
  const { pathname } = location;
  const index = steps.findIndex(({ path }) => path === pathname);
  return index;
}

function useView(lang, content) {
  const history = useHistory();
  const location = useLocation();
  const [step, setStep] = useState(0);
  const [path, setPath] = useState(null);

  useEffect(() => {
    const index = getStepIndexByPath(location);

    setPath(getPathByStepIndex(index + 1));

    const stepNeedUpdate = index !== step;
    if (stepNeedUpdate) setStep(index);

    const missingValues = (index > 1 && !lang) || (index > 2 && !content);
    if (missingValues) history.replace(getPathByStepIndex(0));

    return () => {};
  }, [content, history, lang, location, step]);

  return { path, step, steps };
}

export default useView;
