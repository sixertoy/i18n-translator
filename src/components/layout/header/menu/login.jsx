// import PropTypes from 'prop-types';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { createUseStyles, useTheme } from 'react-jss';

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
      <button className={classes.button} type="button" onClick={() => {}}>
        <GithubIcon className={classes.icon} />
        <span>Sign in with GitHub</span>
      </button>
      <button className={classes.button} type="button" onClick={() => {}}>
        <GoogleIcon className={classes.icon} />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

LoginComponent.defaultProps = {};

LoginComponent.propTypes = {};

export default LoginComponent;
