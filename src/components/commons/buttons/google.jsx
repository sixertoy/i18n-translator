import PropTypes from 'prop-types';
import React from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import LoginButton from '../login-button';

const GoogleButtonComponent = React.memo(({ login }) => {
  return (
    <LoginButton onClick={() => {}}>
      <GoogleIcon className="mr12" />
      {!login && <span>Sign in with Google</span>}
      {login && <span>Login in with Google</span>}
    </LoginButton>
  );
});

GoogleButtonComponent.defaultProps = {
  login: false,
};

GoogleButtonComponent.propTypes = {
  login: PropTypes.bool,
};

export default GoogleButtonComponent;
