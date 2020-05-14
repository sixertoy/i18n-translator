import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import React from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import { useLogin } from '../../hooks';
import Button from '../button';

const GoogleButtonComponent = React.memo(({ className, login }) => {
  const label = (login && 'Login') || 'Signup';
  const { onLoginError, onLoginSuccess } = useLogin();

  return (
    <Button
      className={className}
      onClick={() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(onLoginSuccess)
          .catch(onLoginError);
      }}>
      <GoogleIcon className="mr12" />
      <span>{label}&nbsp;with Google</span>
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
