import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteComponent = React.memo(({ children, component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <React.Fragment>
          <IfFirebaseUnAuthed>
            {() => (
              <Redirect to={{ pathname: '/', state: { from: location } }} />
            )}
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>{() => children}</IfFirebaseAuthed>
        </React.Fragment>
      )}
    />
  );
});

PrivateRouteComponent.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.node.isRequired,
};

export default PrivateRouteComponent;
