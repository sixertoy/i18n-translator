import PropTypes from 'prop-types';
import React from 'react';

import { FirebaseAuthContext, renderWithProps } from '../core';

const IfFirebaseReady = React.memo(({ children }) => (
  <FirebaseAuthContext.Consumer>
    {state => {
      const { isReady } = state;
      if (!isReady) return null;
      return renderWithProps(children, state);
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
