import PropTypes from 'prop-types';
import React from 'react';

import { FirebaseAuthContext } from '../core';

const IfFirebaseUnAuthed = React.memo(({ children }) => (
  <FirebaseAuthContext.Consumer>
    {authState => {
      const { isSignedIn } = authState;
      if (isSignedIn) return null;
      return children(authState);
    }}
  </FirebaseAuthContext.Consumer>
));

IfFirebaseUnAuthed.propTypes = {
  children: PropTypes.func.isRequired,
};

IfFirebaseUnAuthed.displayName = 'IfFirebaseUnAuthed';

export default IfFirebaseUnAuthed;
