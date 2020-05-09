import PropTypes from 'prop-types';
import React from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { createUseStyles } from 'react-jss';

import LoginButton from '../login-button';

const useStyles = createUseStyles({
  icon: {
    composes: ['mr12'],
  },
});

const GoogleButtonComponent = React.memo(({ login }) => {
  const classes = useStyles();
  return (
    <LoginButton onClick={() => {}}>
      <GoogleIcon className={classes.icon} />
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
