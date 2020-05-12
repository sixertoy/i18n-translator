import get from 'lodash.get';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { DEFAULT_LANGUAGES } from '../../constants';
import { selectProject } from '../../redux/selectors';

const useStep = draft => {
  const history = useHistory();
  const { id, index } = useParams();
  const project = useSelector(_ => selectProject(_, id));

  const step = Number(index);
  const baseurl = `/import/${id}/step`;
  const next = `${baseurl}/${step + 1}`;

  const steps = [
    get(project, 'name', 'Commencer'),
    get(DEFAULT_LANGUAGES, [draft.lang], 'Langue'),
    'Importer',
    'Créer',
  ];

  useEffect(() => {
    if (!project) history.replace('/404');
  }, [history, id, project]);

  // useEffect(() => {
  // const hasNoLang = step > 2 && !lang;
  // const hasNoContent = step > 3 && !content;
  // const shouldRedirectIfmissingValues = hasNoLang || hasNoContent;
  // if (shouldRedirectIfmissingValues) {
  //   history.replace(`${baseurl}/1`);
  // }
  // return () => {};
  // }, [history, step, baseurl]);

  return { id, next, step, steps };
};

export default useStep;
