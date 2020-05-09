import React from 'react';
import { createUseStyles } from 'react-jss';

import ApplicationFooter from './footer';
import ApplicationHeader from './header';

const useStyles = createUseStyles({
  views: {
    composes: ['flex-1'],
  },
});

const withLayout = WrappedComponent => props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ApplicationHeader />
      <div className={classes.views}>
        <WrappedComponent {...props} />
      </div>
      <ApplicationFooter />
    </React.Fragment>
  );
};

export default withLayout;
