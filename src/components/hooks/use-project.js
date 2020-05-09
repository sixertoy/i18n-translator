import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectProjectWithPercentage } from '../../redux/selectors';

function useProject() {
  const { id } = useParams();
  const project = useSelector(_ => selectProjectWithPercentage(_, id));
  if (!project) return null;
  return project;
}

export default useProject;
