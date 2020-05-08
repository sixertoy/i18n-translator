import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import LoginButton from '../login-button';

const useStyles = createUseStyles({
  icon: {
    composes: ['mr12'],
  },
});

const GoogleButtonComponent = () => {
  const classes = useStyles();
  return (
    <LoginButton onClick={() => {}}>
      <GithubIcon className={classes.icon} />
      <span>Sign in with GitHub</span>
    </LoginButton>
  );
};

export default GoogleButtonComponent;
