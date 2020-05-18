import classnames from 'classnames';
import React from 'react';
import {
  MdDashboard as ProjectsIcon,
  MdHome as HomeIcon,
} from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Tooltip from '../../../commons/tooltip';
import Projects from './projects';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '& + &': { marginLeft: 4 },
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs16', 'is-bold', 'text-center', 'p7'],
    lineHeight: '1.25em',
    transition: 'background 0.5s',
    width: 'auto',
  }),
  colored: ({ theme }) => ({
    background: '#FFFFFF',
    color: theme.colors.gradient[0],
  }),
  container: {
    composes: ['no-flex'],
  },
  tooltip: ({ theme }) => ({
    '& .tippy-content': { padding: 0 },
    borderRadius: 3,
    height: `calc(100vh - ${theme.sizes.header + 7}px)`,
    left: -70,
    padding: 8,
    top: 7,
    width: 280,
  }),
  wrapper: {
    composes: ['flex-columns', 'flex-start', 'items-center'],
  },
});

const ApplicationMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="header-menu">
      <div className={classes.wrapper}>
        <Link className={classnames(classes.button, classes.colored)} to="/">
          <HomeIcon className="fs20" />
        </Link>
        <Tooltip
          arrow={false}
          className={classes.tooltip}
          component={<Projects />}
          placement="bottom-start"
          theme="light">
          <button
            className={classnames(classes.button, classes.colored)}
            type="button">
            <ProjectsIcon className="fs20" />
            <span className="ml7">Projets</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
});

export default ApplicationMenuComponent;
