import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import Button from '../button';

const SignoutComponent = React.memo(({ firebase }) => {
  const onSignOut = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {});
  }, [firebase]);

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
