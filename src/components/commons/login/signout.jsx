import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../button';

const SignoutComponent = React.memo(({ firebase }) => {
  const history = useHistory();

  const onSignOut = useCallback(() => {
    const auth = firebase.app().auth();
    auth.signOut();
    history.push('/');
  }, [firebase, history]);

  return (
    <Button onClick={onSignOut}>
      <span>Signout</span>
    </Button>
  );
});

SignoutComponent.propTypes = {
  firebase: PropTypes.shape().isRequired,
};

export default SignoutComponent;
