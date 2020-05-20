import React from 'react';
import {
  AiFillHome as HomeIcon,
  AiOutlineProject as ProjectsIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { RESPONSIVE_BREAKPOINT } from '../../../../constants';
import Tooltip from '../../../commons/tooltip';
import { useTooltip } from '../../../hooks';
import Projects from './projects';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '& + &': { marginLeft: 4 },
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: 20 },
    '&:hover': { background: 'hsla(0,0%,100%,.2)' },
    background: 'hsla(0,0%,100%,.3)',
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs16', 'is-bold', 'text-center', 'p7'],
    lineHeight: '1.25em',
    transition: 'background 0.5s',
    width: 'auto',
  }),
  container: {
    composes: ['no-flex'],
  },
  tooltip: {
    '& .tippy-content': { padding: 0 },
    borderRadius: 3,
    height: 480,
    padding: 8,
    width: 280,
  },
  wrapper: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
  [`@media (max-width: ${RESPONSIVE_BREAKPOINT}px)`]: {
    button: {
      '& span': {
        display: 'none',
        margin: 0,
        visibility: 'hidden',
      },
    },
  },
});

const ApplicationMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { closeTooltipHandler, onCreateHandler } = useTooltip();
  return (
    <div className={classes.container} id="header-menu">
      <div className={classes.wrapper}>
        <Link className={classes.button} to="/">
          <HomeIcon />
        </Link>
        <Tooltip
          useHover
          className={classes.tooltip}
          component={<Projects onItemClick={closeTooltipHandler} />}
          offset={[-41, 7]}
          placement="bottom-start"
          onCreate={onCreateHandler}>
          <button className={classes.button} type="button">
            <ProjectsIcon />
            <span>Projets</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
});

export default ApplicationMenuComponent;
