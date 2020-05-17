import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { IfFirebaseAuthed, IfFirebaseUnAuthed } from '../../../core/firebase';
import GithubLogin from '../buttons/github';
import GoogleLogin from '../buttons/google';
import Signout from './signout';

const useStyles = createUseStyles({
  login: {},
});

// https://react-firebase-js.com/docs/guides/build-a-react-app-with-firebase-auth-and-realtime-database/add-google-and-anonymous-auth
const LoginComponent = React.memo(({ login }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.login}>
      <IfFirebaseUnAuthed>
        {() => (
          <React.Fragment>
            <GithubLogin login={login} />
            <GoogleLogin className="mt7" login={login} />
          </React.Fragment>
        )}
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>{() => <Signout />}</IfFirebaseAuthed>
    </div>
  );
});

LoginComponent.defaultProps = {
  login: false,
};

LoginComponent.propTypes = {
  login: PropTypes.bool,
};

export default LoginComponent;
