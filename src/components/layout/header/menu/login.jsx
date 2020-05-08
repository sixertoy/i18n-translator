// import PropTypes from 'prop-types';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { createUseStyles, useTheme } from 'react-jss';

import LoginButton from '../../../commons/login-button';

const useStyles = createUseStyles({
  button: {
    '& + &': { marginTop: 12 },
    background: '#000000',
    borderRadius: 4,
    composes: ['fs18', 'is-block', 'py12', 'px24'],
    width: 250,
  },
  container: {},
  icon: {
    composes: ['mr12'],
  },
});

const LoginComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.login}>
      <LoginButton onClick={() => {}}>
        <GithubIcon className={classes.icon} />
        <span>Sign in with GitHub</span>
      </LoginButton>
      <LoginButton onClick={() => {}}>
        <GoogleIcon className={classes.icon} />
        <span>Sign in with Google</span>
      </LoginButton>
    </div>
  );
};

LoginComponent.defaultProps = {};

LoginComponent.propTypes = {};

export default LoginComponent;
