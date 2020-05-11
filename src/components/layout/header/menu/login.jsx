import { FirebaseAuthConsumer } from '@react-firebase/auth';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';
import GithubLogin from '../../../commons/buttons/github';
import GoogleLogin from '../../../commons/buttons/google';

const useStyles = createUseStyles({
  login: {},
  splitter: ({ theme }) => ({
    background: theme.colors.black,
    border: 0,
    composes: ['is-block', 'my12'],
    height: 1,
    opacity: 0.15,
  }),
});

// https://react-firebase-js.com/docs/guides/build-a-react-app-with-firebase-auth-and-realtime-database/add-google-and-anonymous-auth
const LoginComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <FirebaseAuthConsumer>
      {({ firebase, isSignedIn }) =>
        (!isSignedIn && (
          <React.Fragment>
            <div className={classes.login}>
              <GithubLogin firebase={firebase} />
              <GoogleLogin className="mt7" firebase={firebase} />
            </div>
            <hr className={classes.splitter} />
          </React.Fragment>
        )) || (
          <Button
            onClick={() => {
              firebase.app().auth()
.signOut();
            }}>
            <span>Signout</span>
          </Button>
        )
      }
    </FirebaseAuthConsumer>
  );
});

export default LoginComponent;
