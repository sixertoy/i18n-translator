import React from 'react';

import ApplicationFooter from './footer';
import ApplicationHeader from './header';

const withLayout = WrappedComponent => props => {
  return (
    <React.Fragment>
      <ApplicationHeader />
      <div className="flex-1">
        <WrappedComponent {...props} />
      </div>
      <ApplicationFooter />
    </React.Fragment>
  );
};

export default withLayout;
