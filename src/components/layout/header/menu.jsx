import React from 'react';
import { AiOutlineAppstoreAdd as ProjectsIcon } from 'react-icons/ai';
import { MdAccountCircle as AccountIcon } from 'react-icons/md';
import { RiHome2Line as HomeIcon } from 'react-icons/ri';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

import { USE_ACCOUNT, USE_PROJECTS } from '../../../features.json';

const useStyles = createUseStyles({
  link: ({ theme }) => ({
    color: theme.white,
    composes: ['p7', 'fs20'],
  }),
  menu: {},
});

const MENU_ITEMS = [
  {
    Icon: HomeIcon,
    path: '/',
    title: 'Accueil',
    visible: true,
  },
  {
    Icon: ProjectsIcon,
    path: '/',
    title: 'Projets',
    visible: USE_PROJECTS,
  },
  {
    Icon: AccountIcon,
    path: '/',
    title: 'Votre compte',
    visible: USE_ACCOUNT,
  },
].filter(({ visible }) => visible);

const ReactDumbComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.menu}>
      {MENU_ITEMS.map(({ Icon, path, title }) => (
        <Tooltip
          key={title}
          arrow
          arrowSize="small"
          position="bottom-end"
          style={{ fontSize: 8 }}
          title={title}>
          <Link className={classes.link} to={path}>
            <Icon />
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

ReactDumbComponent.defaultProps = {};

ReactDumbComponent.propTypes = {};

export default ReactDumbComponent;
