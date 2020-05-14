import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthRouteComponent = React.memo(({ push }) => {
  return (
    <React.Fragment>
      <IfFirebaseUnAuthed>
        {() => <Redirect push={push} to="/" />}
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>
        {() => <Redirect push={push} to="/board" />}
      </IfFirebaseAuthed>
    </React.Fragment>
  );
});

AuthRouteComponent.defaultProps = {
  push: false,
};

AuthRouteComponent.propTypes = {
  push: PropTypes.bool,
};

export default AuthRouteComponent;
