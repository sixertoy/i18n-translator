import firebase from 'firebase/app';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../button';

const SignoutComponent = React.memo(() => {
  const history = useHistory();

  const onSignOut = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push('/');
      });
  }, [history]);

  return (
    <Button onClick={onSignOut}>
      <span>Signout</span>
    </Button>
  );
});

SignoutComponent.propTypes = {};

export default SignoutComponent;
