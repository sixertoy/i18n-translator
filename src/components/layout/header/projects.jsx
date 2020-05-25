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
    padding: 0,
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
      // useHover
      className={classes.tooltip}
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
