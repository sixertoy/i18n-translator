import PropTypes from 'prop-types';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';

import Button from '../button';

const GithubButtonComponent = React.memo(({ className, firebase, login }) => {
  return (
    <Button
      className={className}
      onClick={() => {
        if (!firebase) return;
        const githubAuthProvider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(githubAuthProvider);
      }}>
      <GithubIcon className="mr12" />
      {!login && <span>Sign in with GitHub</span>}
      {login && <span>Login in with GitHub</span>}
    </Button>
  );
});

GithubButtonComponent.defaultProps = {
  className: '',
  firebase: null,
  login: false,
};

GithubButtonComponent.propTypes = {
  className: PropTypes.string,
  firebase: PropTypes.shape(),
  login: PropTypes.bool,
};

export default GithubButtonComponent;
