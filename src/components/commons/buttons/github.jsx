import PropTypes from 'prop-types';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';

import LoginButton from '../login-button';

const GithubButtonComponent = React.memo(({ login }) => {
  return (
    <LoginButton onClick={() => {}}>
      <GithubIcon className="mr12" />
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
