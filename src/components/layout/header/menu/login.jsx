import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import GithubLogin from '../../../commons/buttons/github';
import GoogleLogin from '../../../commons/buttons/google';

const useStyles = createUseStyles({
  login: {},
});

const LoginComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.login}>
      <GithubLogin />
      <GoogleLogin />
    </div>
  );
});

export default LoginComponent;
