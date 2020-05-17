import React from 'react';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { FirebaseAuthConsumer } from '../../../../core/firebase';

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
    <FirebaseAuthConsumer>
      {({ user }) => (
        <button className={classes.button} type="button">
          <React.Fragment>
            {!user && <UserIcon />}
            {user && <img alt="user avatar" src={user.photoURL} />}
          </React.Fragment>
        </button>
      )}
    </FirebaseAuthConsumer>
  );
});

export default AccountButtonComponent;
