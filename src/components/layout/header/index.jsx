import classnames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Brand from '../brand';
import Avatar from './avatar';

const useStyles = createUseStyles({
  aside: {
    '&.left': { justifyContent: 'flex-start' },
    '&.right': { justifyContent: 'flex-end' },
    composes: ['flex-columns', 'items-center'],
  },
  container: {
    // background: `linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important`,
    zIndex: 1000000,
  },
  logo: {
    composes: ['fs10', 'mx12'],
    fontSize: '0.9rem',
  },
  spacer: {
    composes: ['mr3'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between', 'items-center', 'px24'],
    margin: '0 auto',
    maxWidth: 960,
    paddingBottom: 64,
    paddingTop: 24,
  },
});

const ApplicationHeaderComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="layout-header">
      <div className={classes.wrapper}>
        {/* <div className={classnames(classes.aside, 'left')}>
          <Add />
        </div> */}
        <div className={classes.logo}>
          <Brand />
        </div>
        <div className={classnames(classes.aside, 'right')}>
          <Avatar />
        </div>
      </div>
    </div>
  );
});

export default ApplicationHeaderComponent;
