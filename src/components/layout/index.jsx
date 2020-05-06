import React from 'react';
import { createUseStyles } from 'react-jss';

import ApplicationFooter from './footer';
import ApplicationHeader from './header';

const useStyles = createUseStyles({
  view: {
    composes: ['flex-1'],
    height: 'auto',
  },
});

const wittLayout = WrappedComponent => props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ApplicationHeader />
      <div className={classes.view}>
        <WrappedComponent {...props} />
      </div>
      <ApplicationFooter />
    </React.Fragment>
  );
};

export default wittLayout;
