import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { MdDashboard as ProjectsIcon } from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../../commons/tooltip';
import { useTooltip } from '../../../hooks';
import Projects from './projects';

const useStyles = createUseStyles({
  tooltip: {
    '& .tippy-content': { padding: 0 },
    borderRadius: 3,
    // left: -41,
    height: 480,
    // top: 0,
    padding: 8,
    width: 280,
  },
});

const ListComponent = React.memo(({ className }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { closeTooltip, createTooltip } = useTooltip();

  return (
    <Tooltip
      useHover
      className={classes.tooltip}
      component={<Projects onItemClick={closeTooltip} />}
      offset={[-41, 7]}
      placement="right"
      onCreate={createTooltip}>
      <button className={className} type="button">
        <ProjectsIcon className="fs20" />
        <span className="ml7">Projets</span>
      </button>
    </Tooltip>
  );
});

ListComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ListComponent;
