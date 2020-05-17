import PropTypes from 'prop-types';
import React from 'react';

import { FirebaseAuthContext } from '../core';

const IfFirebaseLoading = React.memo(({ loader: Loader }) => (
  <FirebaseAuthContext.Consumer>
    {state => {
      const { isReady } = state;
      if (isReady) return null;
      const isFunction = typeof Loader === 'function';
      if (isFunction) return Loader(state);
      return Loader;
    }}
  </FirebaseAuthContext.Consumer>
));

IfFirebaseLoading.propTypes = {
  loader: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

IfFirebaseLoading.displayName = 'IfFirebaseLoading';

export default IfFirebaseLoading;
