import firebase from 'firebase/app';
import React, { useCallback } from 'react';

import { useLogin } from '../../hooks';
import Button from '../button';

const SignOutComponent = React.memo(() => {
  const { onLogoutError, onLogoutSuccess } = useLogin();

  const onSignoutClick = useCallback(() => {
    firebase.auth().signOut()
.then(onLogoutSuccess)
.catch(onLogoutError);
  }, [onLogoutError, onLogoutSuccess]);

  return (
    <Button onClick={onSignoutClick}>
      <span>Signout</span>
    </Button>
  );
});

SignOutComponent.propTypes = {};

export default SignOutComponent;
