// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import GithubLogin from '../../../commons/buttons/github';
import GoogleLogin from '../../../commons/buttons/google';

const useStyles = createUseStyles({
  container: {},
});

const LoginComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.login}>
      <GithubLogin />
      <GoogleLogin />
    </div>
  );
};

LoginComponent.defaultProps = {};

LoginComponent.propTypes = {};

export default LoginComponent;
