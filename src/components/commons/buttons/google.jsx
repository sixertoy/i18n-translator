import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { createUseStyles, useTheme } from 'react-jss';

import { FIREBASE_PROVIDER_GOOGLE } from '../../../constants';
import { useLogin } from '../../hooks';
import { useButtonStyles } from '../../styles';

const useStyles = createUseStyles({
  button: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
});

const GoogleButtonComponent = React.memo(({ className, useSignup }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const buttonClasses = useButtonStyles({ theme });
  const { onSigninClick } = useLogin(FIREBASE_PROVIDER_GOOGLE);

  return (
    <button
      className={classnames(buttonClasses.btn, classes.button, className)}
      type="button"
      onClick={onSigninClick}>
      <GoogleIcon className="mr12" />
      {!useSignup && <span>Signin with Google</span>}
      {useSignup && <span>Signup with Google</span>}
    </button>
  );
});

GoogleButtonComponent.defaultProps = {
  className: '',
  useSignup: false,
};

GoogleButtonComponent.propTypes = {
  className: PropTypes.string,
  useSignup: PropTypes.bool,
};

export default GoogleButtonComponent;
