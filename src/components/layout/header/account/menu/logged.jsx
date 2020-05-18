import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import {
  AiOutlineGithub as GithubIcon,
  AiOutlineGoogle as GoogleIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import {
  FIREBASE_PROVIDER_EMAIL,
  FIREBASE_PROVIDER_GITHUB,
  FIREBASE_PROVIDER_GOOGLE,
} from '../../../../../constants';
import SignOut from '../../../../commons/buttons/signout';

const useStyles = createUseStyles({
  container: {},
});

const LoggedUserComponent = React.memo(({ provider, user }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const email = get(user, 'email');
  const username = get(user, 'displayName');
  const lastSignin = get(user, 'metadata.lastSignInTime');
  // const uid = get(user, 'uid');
  // const anonymous = get(user, 'isAnonymous');
  // const emailVerified = get(user, 'emailVerified');
  return (
    <div className={classes.container}>
      <div>
        {provider === FIREBASE_PROVIDER_GITHUB && <GithubIcon />}
        {provider === FIREBASE_PROVIDER_GOOGLE && <GoogleIcon />}
        {provider === FIREBASE_PROVIDER_EMAIL && <GoogleIcon />}
      </div>
      <div>
        <span>{username}</span>
      </div>
      <div>
        <span>{email}</span>
      </div>
      <div>
        <span>{lastSignin}</span>
      </div>
      <div>
        <SignOut />
      </div>
    </div>
  );
});

LoggedUserComponent.propTypes = {
  provider: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
};

export default LoggedUserComponent;
