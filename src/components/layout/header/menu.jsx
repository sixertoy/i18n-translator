import React from 'react';
import { AiOutlineProject as ProjectsIcon } from 'react-icons/ai';
import { MdAccountCircle as AccountIcon } from 'react-icons/md';
import { RiHome2Line as HomeIcon } from 'react-icons/ri';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { USE_ACCOUNT, USE_PROJECTS } from '../../../features.json';

const useStyles = createUseStyles({
  label: {
    composes: ['ml7', 'is-normal', 'fs14'],
  },
  link: {
    '&:hover': { color: '#FFFFFF' },
    background: '#000000',
    borderRadius: 4,
    composes: ['is-inline-block', 'fs18', 'mr7', 'text-center', 'px12'],
    height: 40,
    lineHeight: '38px',
    minWidth: 40,
    transition: 'color 0.5s',
  },
  menu: {
    composes: ['is-absolute'],
    left: 12,
  },
});

const MENU_ITEMS = [
  {
    Icon: HomeIcon,
    path: '/home',
    title: 'Accueil',
    useLabel: false,
    visible: true,
  },
  {
    Icon: ProjectsIcon,
    path: '/board',
    title: 'Projets',
    useLabel: true,
    visible: USE_PROJECTS,
  },
  {
    Icon: AccountIcon,
    path: '/',
    title: 'Votre compte',
    useLabel: false,
    visible: USE_ACCOUNT,
  },
].filter(({ visible }) => visible);

const ReactDumbComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.menu}>
      {MENU_ITEMS.map(({ Icon, path, title, useLabel }) => (
        <Link className={classes.link} to={path}>
          <Icon />
          {useLabel && <span className={classes.label}>{title}</span>}
        </Link>
      ))}
    </div>
  );
});

ReactDumbComponent.defaultProps = {};

ReactDumbComponent.propTypes = {};

export default ReactDumbComponent;
