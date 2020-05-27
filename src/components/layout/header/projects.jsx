import React from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';

import Tooltip from '../../commons/tooltip';
import { useTooltip } from '../../hooks';
import Menu from './menu';
import useButtonStyles from './styles';

const ProjectsButtonComponent = React.memo(() => {
  const buttonClasses = useButtonStyles();
  const { closeTooltipHandler, onCreateHandler } = useTooltip();
  return (
    <Tooltip
      // useHover
      arrow={false}
      component={<Menu onClick={closeTooltipHandler} />}
      offset={[-41, 12]}
      placement="bottom-start"
      theme="light"
      onCreate={onCreateHandler}>
      <button className={buttonClasses.button} type="button">
        <ProjectsIcon />
        <span>Projets</span>
      </button>
    </Tooltip>
  );
});

export default ProjectsButtonComponent;
