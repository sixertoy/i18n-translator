import React from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
// import { MdAccountCircle as AccountIcon } from 'react-icons/md';
import { RiHome2Line as HomeIcon } from 'react-icons/ri';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Tooltip from '../../../commons/tooltip';
import Login from './login';

const useStyles = createUseStyles({
  button: {
    '&:hover': { color: '#FFFFFF' },
    background: '#000000',
    borderRadius: 4,
    composes: ['is-inline-block', 'fs18', 'mr7', 'text-center', 'px12'],
    height: 40,
    lineHeight: '38px',
    minWidth: 40,
    transition: 'color 0.5s',
  },
  icon: {},
  label: {
    composes: ['ml7', 'is-normal', 'fs16'],
  },
  menu: {
    composes: ['is-absolute'],
    left: 0,
  },
});

const ApplicationMenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.menu}>
      <Link className={classes.button} to="/home">
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
