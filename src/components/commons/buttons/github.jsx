import PropTypes from 'prop-types';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import LoginButton from '../login-button';

const useStyles = createUseStyles({
  icon: {
    composes: ['mr12'],
  },
});

const GithubButtonComponent = React.memo(({ login }) => {
  const classes = useStyles();
  return (
    <LoginButton onClick={() => {}}>
      <GithubIcon className={classes.icon} />
      {!login && <span>Sign in with GitHub</span>}
      {login && <span>Login in with GitHub</span>}
    </LoginButton>
  );
});

GithubButtonComponent.defaultProps = {
  login: false,
};

GithubButtonComponent.propTypes = {
  login: PropTypes.bool,
};

export default GithubButtonComponent;
