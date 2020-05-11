import PropTypes from 'prop-types';
import React from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import Button from '../button';

const GoogleButtonComponent = React.memo(({ className, firebase, login }) => {
  return (
    <Button
      className={className}
      onClick={() => {
        if (!firebase) return;
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
  firebase: false,
  login: false,
};

GoogleButtonComponent.propTypes = {
  className: PropTypes.string,
  firebase: PropTypes.shape(),
  login: PropTypes.bool,
};

export default GoogleButtonComponent;
