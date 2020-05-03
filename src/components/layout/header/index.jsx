import React from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { MdAccountCircle as AccountIcon } from 'react-icons/md';
import { RiHome2Line as HomeIcon } from 'react-icons/ri';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { USE_ACCOUNT, USE_PROJECTS } from '../../../features.json';
import JSONLogo from './json-logo';

const useStyles = createUseStyles({
  container: {
    composes: [
      'flex-columns',
      'flex-between',
      'is-relative',
      'text-left',
      'items-center',
    ],
    height: 40,
    maxHeight: 40,
    minHeight: 40,
  },
  link: {
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['is-block'],
    fontSize: 18,
    padding: 7,
  },
  menu: {
    composes: ['is-absolute'],
    right: 12,
    top: 3,
  },
  title: {
    composes: ['m0', 'fs20'],
    fontFamily: ['Cinzel', 'serif'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-center', 'items-center'],
  },
});

const ApplicationHeader = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div className="blank" />
      <div className={classes.wrapper}>
        <JSONLogo />
        <div>
          <h1 className={classes.title}>
            <span>i18n Online Translation Editor</span>
          </h1>
        </div>
      </div>
      <div className={classes.menu}>
        <Link className={classes.link} to="/">
          <HomeIcon />
        </Link>
        {USE_PROJECTS && (
          <Link className={classes.link} to="/">
            <ProjectsIcon />
            <span>Projects</span>
          </Link>
        )}
        {USE_ACCOUNT && (
          <Link className={classes.link} to="/">
            <AccountIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ApplicationHeader;
