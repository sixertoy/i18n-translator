import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineGithub as GithubIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import { FIREBASE_PROVIDER_GITHUB } from '../../../constants';
import { useLogin } from '../../hooks';
import { useButtonStyles } from '../../styles';

const useStyles = createUseStyles({
  button: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
});

const GithubButtonComponent = React.memo(({ className, useSignup }) => {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const { onSigninClick } = useLogin(FIREBASE_PROVIDER_GITHUB);

  return (
    <button
      className={classnames(buttonClasses.btn, classes.button, className)}
      type="button"
      onClick={onSigninClick}>
      <GithubIcon className="mr12" />
      {!useSignup && <span>Signin with Github</span>}
      {useSignup && <span>Signup with Github</span>}
    </button>
  );
});

GithubButtonComponent.defaultProps = {
  className: '',
  useSignup: false,
};

GithubButtonComponent.propTypes = {
  className: PropTypes.string,
  useSignup: PropTypes.bool,
};

export default GithubButtonComponent;
