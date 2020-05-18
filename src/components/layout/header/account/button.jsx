import get from 'lodash.get';
import React from 'react';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { IfFirebaseAuthed } from '../../../../core/firebase';

const useStyles = createUseStyles({
  button: {
    '& img': {
      composes: ['is-block'],
      height: 34,
      width: 34,
    },
    borderRadius: '50%',
    composes: ['is-block'],
    fontSize: 16,
    height: 34,
    overflow: 'hidden',
    width: 34,
  },
});

const AccountButtonComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <IfFirebaseAuthed>
      {state => {
        const photoURL = get(state, 'user.photoURL', null);
        const isAnonymous = get(state, 'user.isAnonymous', null);
        const showIcon = !isAnonymous || !photoURL;
        return (
          <button className={classes.button} type="button">
            <React.Fragment>
              {showIcon && <UserIcon />}
              {!showIcon && <img alt="user avatar" src={photoURL} />}
            </React.Fragment>
          </button>
        );
      }}
    </IfFirebaseAuthed>
  );
});

export default AccountButtonComponent;
