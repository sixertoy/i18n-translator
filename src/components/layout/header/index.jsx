import classnames from 'classnames';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Brand from '../brand';
import Add from './add';
import Avatar from './avatar';
import Home from './home';
import Projects from './projects';

const useStyles = createUseStyles({
  aside: {
    '&.left': { justifyContent: 'flex-start' },
    '&.left > *': { marginRight: 5 },
    '&.right': { justifyContent: 'flex-end' },
    '&.right > *': { marginLeft: 5 },
    composes: ['flex-columns', 'items-center'],
  },
  container: {
    background: `linear-gradient(90deg, #EE256B 0%, #FD7822 100%)`,
  },
  logo: {
    composes: ['fs10', 'mx12'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between', 'items-center', 'p3'],
  },
});

const ApplicationHeaderComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.wrapper}>
        <div className={classnames(classes.aside, 'left')}>
          <Home />
          <Projects />
        </div>
        <div className={classes.logo}>
          <Brand />
        </div>
        <div className={classnames(classes.aside, 'right')}>
          <Add />
          <Avatar />
        </div>
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
