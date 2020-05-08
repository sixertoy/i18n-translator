import React from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { createUseStyles } from 'react-jss';

import LoginButton from '../login-button';

const useStyles = createUseStyles({
  icon: {
    composes: ['mr12'],
  },
});

const ButtonGoogleComponent = () => {
  const classes = useStyles();
  return (
    <LoginButton onClick={() => {}}>
      <GoogleIcon className={classes.icon} />
      <span>Sign in with Google</span>
    </LoginButton>
  );
};

export default ButtonGoogleComponent;
