import PropTypes from 'prop-types';
import React from 'react';

import { FirebaseAuthContext } from '../core';

const IfFirebaseAuthed = React.memo(({ children }) => (
  <FirebaseAuthContext.Consumer>
    {authState => {
      const { isSignedIn } = authState;
      if (!isSignedIn) return null;
      return children(authState);
    }}
  </FirebaseAuthContext.Consumer>
));

IfFirebaseAuthed.propTypes = {
  children: PropTypes.func.isRequired,
};

IfFirebaseAuthed.displayName = 'IfFirebaseAuthed';

export default IfFirebaseAuthed;
