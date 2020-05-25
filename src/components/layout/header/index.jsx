import classnames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Brand from '../brand';
import Add from './add';
import Avatar from './avatar';
import Home from './home';
import Projects from './projects';

const useStyles = createUseStyles({
  aside: {
    '&.left': { justifyContent: 'flex-start' },
    '&.right': { justifyContent: 'flex-end' },
    composes: ['flex-columns', 'items-center'],
  },
  container: {
    background: `linear-gradient(90deg, #EE256B 0%, #FD7822 100%)`,
  },
  logo: {
    composes: ['fs10', 'mx12'],
  },
  spacer: {
    composes: ['mr3'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between', 'items-center', 'p3'],
  },
});

const ApplicationHeaderComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.wrapper}>
        <div className={classnames(classes.aside, 'left')}>
          <Home />
          <span className={classes.spacer} />
          <Projects />
        </div>
        <div className={classes.logo}>
          <Brand />
        </div>
        <div className={classnames(classes.aside, 'right')}>
          <Add />
          <span className={classes.spacer} />
          <Avatar />
        </div>
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
