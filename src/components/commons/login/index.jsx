import { FirebaseAuthConsumer } from '@react-firebase/auth';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Signin from './signin';
import Signout from './signout';

const useStyles = createUseStyles({
  login: {},
});

// https://react-firebase-js.com/docs/guides/build-a-react-app-with-firebase-auth-and-realtime-database/add-google-and-anonymous-auth
const LoginComponent = React.memo(({ login }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <FirebaseAuthConsumer>
      {({ firebase, isSignedIn }) => (
        <div className={classes.login}>
          {!isSignedIn && <Signin firebase={firebase} login={login} />}
          {isSignedIn && <Signout firebase={firebase} />}
        </div>
      )}
    </FirebaseAuthConsumer>
  );
});

LoginComponent.defaultProps = {
  login: false,
};

LoginComponent.propTypes = {
  login: PropTypes.bool,
};

export default LoginComponent;
