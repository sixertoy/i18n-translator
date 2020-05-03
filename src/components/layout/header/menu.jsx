import React from 'react';
import {
  AiOutlinePlus as PlusIcon,
  AiOutlineProject as ProjectsIcon,
} from 'react-icons/ai';
import { MdAccountCircle as AccountIcon } from 'react-icons/md';
import { RiHome2Line as HomeIcon } from 'react-icons/ri';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { rgba } from '../../../core/utils/colors';
import {
  USE_ACCOUNT,
  USE_ADD_LANGUAGE,
  USE_PROJECTS,
} from '../../../features.json';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns'],
  },
  link: ({ theme }) => ({
    background: rgba(theme.colors.white, 0.55),
    borderRadius: 4,
    color: theme.colors.blue,
    composes: ['is-block', 'ml7', 'p7', 'fs18'],
  }),
});

const ReactDumbComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      {USE_ADD_LANGUAGE && (
        <Link className={classes.link} to="/board/create">
          <PlusIcon />
        </Link>
      )}
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
  );
};

ReactDumbComponent.defaultProps = {};

ReactDumbComponent.propTypes = {};

export default ReactDumbComponent;
