import React from 'react';
import {
  MdDashboard as ProjectsIcon,
  MdHome as HomeIcon,
} from 'react-icons/md';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Tooltip from '../../commons/tooltip';
import Menu from './menu';
import Title from './title';

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
  container: ({ theme }) => ({
    background: theme.colors.grey,
    composes: ['px32'],
    width: '100%',
  }),
  icon: { composes: ['fs20'] },
  label: { composes: ['ml7'] },
  menu: {
    composes: ['is-absolute', 'flex-columns', 'flex-start', 'items-center'],
    left: 0,
  },
  tooltip: ({ theme }) => ({
    '& .tippy-content': { padding: 0 },
    borderRadius: theme.radius.small,
    height: `calc(100vh - ${theme.sizes.header + 7}px)`,
    left: -70,
    padding: 8,
    top: 7,
  }),
  wrapper: ({ theme }) => ({
    composes: ['flex-columns', 'flex-center', 'items-center', 'is-relative'],
    height: theme.sizes.header,
    maxHeight: theme.sizes.header,
    minHeight: theme.sizes.header,
  }),
});

const ApplicationHeaderComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.wrapper}>
        <div className={classes.menu}>
          <Link className={classes.button} to="/">
            <HomeIcon className={classes.icon} />
          </Link>
          <Tooltip
            arrow={false}
            className={classes.tooltip}
            component={<Menu />}
            placement="bottom-start">
            <button className={classes.button} type="button">
              <ProjectsIcon className={classes.icon} />
              <span className={classes.label}>Projets</span>
            </button>
          </Tooltip>
        </div>
        <Title />
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
