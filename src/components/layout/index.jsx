import React from 'react';

import ApplicationFooter from './footer';
import ApplicationHeader from './header';

const withLayout = WrappedComponent => props => {
  return (
    <React.Fragment>
      <ApplicationHeader />
      <WrappedComponent {...props} />
      <ApplicationFooter />
    </React.Fragment>
  );
};

export default withLayout;
