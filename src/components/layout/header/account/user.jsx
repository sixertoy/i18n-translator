import { FirebaseAuthConsumer } from '@react-firebase/auth';
import get from 'lodash.get';
import React from 'react';
import {
  AiOutlineGithub as GithubIcon,
  AiOutlineGoogle as GoogleIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Login from '../../../commons/login';

const useStyles = createUseStyles({
  container: {},
});

const AccountUserComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <FirebaseAuthConsumer>
      {({ user }) => {
        const email = get(user, 'email');
        const username = get(user, 'displayName');
        const lastSignin = get(user, 'metadata.lastSignInTime');
        const providerId = get(user, 'providerData.0.providerId');
        // console.log('user', user);
        // const anonymous = get(user, 'isAnonymous');
        // const emailVerified = get(user, 'emailVerified');
        return (
          <div className={classes.container}>
            {user && (
              <div className="">
                <div>
                  {providerId === 'github.com' && <GithubIcon />}
                  {providerId === 'google.com' && <GoogleIcon />}
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
              </div>
            )}
            <Login />
          </div>
        );
      }}
    </FirebaseAuthConsumer>
  );
});

AccountUserComponent.defaultProps = {};

AccountUserComponent.propTypes = {};

export default AccountUserComponent;
