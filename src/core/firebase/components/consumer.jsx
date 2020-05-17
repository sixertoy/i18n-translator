import PropTypes from 'prop-types';
import React from 'react';

import { FirebaseAuthContext } from '../core';

const FirebaseAuthConsumer = ({ children }) => {
  return (
    <FirebaseAuthContext.Consumer>
      {authState => children(authState)}
    </FirebaseAuthContext.Consumer>
  );
};

FirebaseAuthConsumer.propTypes = {
  children: PropTypes.func.isRequired,
};

FirebaseAuthConsumer.displayName = 'FirebaseAuthConsumer';

export default FirebaseAuthConsumer;
