import PropTypes from 'prop-types';
import React from 'react';

import { FirebaseAuthContext } from '../core';

const IfFirebaseReady = React.memo(({ children }) => (
  <FirebaseAuthContext.Consumer>
    {state => {
      const { isReady } = state;
      if (!isReady) return null;
      const isFunction = typeof Loader === 'function';
      if (isFunction) return children(state);
      return children;
    }}
  </FirebaseAuthContext.Consumer>
));

IfFirebaseReady.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.elementType,
    PropTypes.func,
  ]).isRequired,
};

IfFirebaseReady.displayName = 'IfFirebaseReady';

export default IfFirebaseReady;
