import React from 'react';
import {
  MdDashboard as ProjectsIcon,
  MdHome as HomeIcon,
} from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

// import { rgba } from '../../../../core/utils';
import Tooltip from '../../../commons/tooltip';
import Login from './login';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '& + &': { marginLeft: 4 },
    // '&:hover': { background: theme.colors.head.button },
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs16', 'is-bold', 'text-center', 'p7'],
    lineHeight: '1.25em',
    transition: 'background 0.5s',
    width: 'auto',
  }),
  icon: { composes: ['fs20'] },
  label: { composes: ['ml7'] },
  menu: {
    composes: ['is-absolute', 'flex-columns', 'flex-start', 'items-center'],
    left: 0,
  },
});

const ApplicationMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.menu}>
      <Link className={classes.button} to="/">
        <HomeIcon className={classes.icon} />
      </Link>
      <Tooltip component={<Login />} placement="bottom-start">
        <button className={classes.button} type="button">
          <ProjectsIcon className={classes.icon} />
          <span className={classes.label}>Projets</span>
        </button>
      </Tooltip>
    </div>
  );
});

export default ApplicationMenuComponent;
