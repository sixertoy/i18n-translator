import React from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../commons/tooltip';
import { useTooltip } from '../../hooks';
import Menu from './menu';
import useButtonStyles from './styles';

const useStyles = createUseStyles({
  tooltip: {
    '& .tippy-content': { padding: 0 },
    borderRadius: 3,
    height: 480,
    padding: 8,
    width: 280,
  },
});

const ProjectsButtonComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const buttonClasses = useButtonStyles({ theme });
  const { closeTooltipHandler, onCreateHandler } = useTooltip();
  return (
    <Tooltip
      useHover
      className={classes.tooltip}
      component={<Menu onItemClick={closeTooltipHandler} />}
      offset={[-41, 7]}
      placement="bottom-start"
      onCreate={onCreateHandler}>
      <button className={buttonClasses.button} type="button">
        <ProjectsIcon />
        <span>Projets</span>
      </button>
    </Tooltip>
  );
});

export default ProjectsButtonComponent;
