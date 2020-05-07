import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const steps = [
  { label: 'Commencer' },
  { label: 'Sélectionner' },
  { label: 'Importer' },
  { label: 'Finaliser' },
];

function useStep(lang, content) {
  const { index } = useParams();
  const step = Number(index);
  const history = useHistory();
  const [nextPath, setNextPath] = useState(null);

  useEffect(() => {
    if (Number.isNaN(step)) {
      history.replace(`/import/1`);
    }
    setNextPath(`/import/${step + 1}`);
    const hasNoLang = step > 2 && !lang;
    const hasNoContent = step > 3 && !content;
    const missingValues = hasNoLang || hasNoContent;
    if (missingValues) {
      history.replace(`/import/1`);
    }
    return () => {};
  }, [content, history, lang, index, step]);

  return { nextPath, step, steps };
}

export default useStep;
