import get from 'lodash.get';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { IfFirebaseAuthed } from '../../../../../core/firebase';
import Anonymous from './anonymous';
import Logged from './logged';

const useStyles = createUseStyles({
  container: {},
});

const MenuComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <IfFirebaseAuthed>
      {({ providerId, user }) => {
        const isAnonymous = get(user, 'isAnonymous');
        return (
          <div className={classes.container}>
            {isAnonymous && <Anonymous />}
            {!isAnonymous && <Logged provider={providerId} user={user} />}
          </div>
        );
      }}
    </IfFirebaseAuthed>
  );
});

MenuComponent.defaultProps = {};

MenuComponent.propTypes = {};

export default MenuComponent;
