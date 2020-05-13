import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import React from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import Button from '../button';

const GoogleButtonComponent = React.memo(({ className, login }) => {
  return (
    <Button
      className={className}
      onClick={() => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
      }}>
      <GoogleIcon className="mr12" />
      {!login && <span>Sign in with Google</span>}
      {login && <span>Login in with Google</span>}
    </Button>
  );
});

GoogleButtonComponent.defaultProps = {
  className: '',
  login: false,
};

GoogleButtonComponent.propTypes = {
  className: PropTypes.string,
  login: PropTypes.bool,
};

export default GoogleButtonComponent;
