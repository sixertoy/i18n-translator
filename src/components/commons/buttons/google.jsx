import classnames from 'classnames';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { createUseStyles, useTheme } from 'react-jss';

import { useButtonStyles, useLogin } from '../../hooks';

const useStyles = createUseStyles({
  button: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
});

const GoogleButtonComponent = React.memo(({ className, subscribe }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const buttonClasses = useButtonStyles({ theme });
  const { onLoginError, onLoginSuccess } = useLogin();

  const onClickHandler = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(onLoginSuccess)
      .catch(onLoginError);
  }, [onLoginError, onLoginSuccess]);

  return (
    <button
      className={classnames(buttonClasses.btn, classes.button, className)}
      type="button"
      onClick={onClickHandler}>
      <GoogleIcon className="mr12" />
      {!subscribe && <span>Signin with Google</span>}
      {subscribe && <span>Signup with Google</span>}
    </button>
  );
});

GoogleButtonComponent.defaultProps = {
  className: '',
  subscribe: false,
};

GoogleButtonComponent.propTypes = {
  className: PropTypes.string,
  subscribe: PropTypes.bool,
};

export default GoogleButtonComponent;
