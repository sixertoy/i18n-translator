import firebase from 'firebase/app';
import React, { useCallback } from 'react';

import { useLogin } from '../../hooks';
import Button from '../button';

const SignOutComponent = React.memo(() => {
  const { onLogoutSuccess } = useLogin();

  const onClick = useCallback(() => {
    const auth = firebase.auth();
    auth.signOut().then(onLogoutSuccess);
  }, [onLogoutSuccess]);

  return (
    <Button onClick={onClick}>
      <span>Signout</span>
    </Button>
  );
});

SignOutComponent.propTypes = {};

export default SignOutComponent;
