import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';

import { useLogin } from '../../hooks';
import Button from '../button';

const GithubButtonComponent = React.memo(({ className, login }) => {
  const label = (login && 'Login') || 'Signup';
  const { onLoginError, onLoginSuccess } = useLogin();

  return (
    <Button
      className={className}
      onClick={() => {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(onLoginSuccess)
          .catch(onLoginError);
      }}>
      <GithubIcon className="mr12" />
      <span>{label}&nbsp;with GitHub</span>
    </Button>
  );
});

GithubButtonComponent.defaultProps = {
  className: '',
  login: false,
};

GithubButtonComponent.propTypes = {
  className: PropTypes.string,
  login: PropTypes.bool,
};

export default GithubButtonComponent;
