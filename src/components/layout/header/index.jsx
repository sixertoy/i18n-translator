import React from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { MdAccountCircle as AccountIcon } from 'react-icons/md';
import { RiHome2Line as HomeIcon } from 'react-icons/ri';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

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
  },
  link: {
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    fontSize: 18,
    padding: 7,
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
      <div className={classes.menu}>
        <Link className={classes.link} to="/">
          <HomeIcon />
        </Link>
        <Link className={classes.link} to="/">
          <ProjectsIcon />
        </Link>
      </div>
      <div className={classes.wrapper}>
        <JSONLogo />
        <div>
          <h1 className={classes.title}>
            <span>i18n Online Translation Editor</span>
          </h1>
        </div>
      </div>
      <Link className={classes.link} to="/">
        <AccountIcon />
      </Link>
    </div>
  );
};

export default ApplicationHeader;
