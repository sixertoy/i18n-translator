import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineGithub as GithubIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { FIREBASE_PROVIDER_GITHUB } from '../../../constants';
import { useButtonStyles, useLogin } from '../../hooks';

const useStyles = createUseStyles({
  button: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
});

const GithubButtonComponent = React.memo(({ className, useSignin }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const buttonClasses = useButtonStyles({ theme });
  const { onSigninClick } = useLogin(FIREBASE_PROVIDER_GITHUB);

  return (
    <button
      className={classnames(buttonClasses.btn, classes.button, className)}
      type="button"
      onClick={onSigninClick}>
      <GithubIcon className="mr12" />
      {useSignin && <span>Signin with Github</span>}
      {!useSignin && <span>Signup with Github</span>}
    </button>
  );
});

GithubButtonComponent.defaultProps = {
  className: '',
  useSignin: false,
};

GithubButtonComponent.propTypes = {
  className: PropTypes.string,
  useSignin: PropTypes.bool,
};

export default GithubButtonComponent;
