import React from 'react';
import { GoSignOut as LogoutIcon } from 'react-icons/go';
import { createUseStyles } from 'react-jss';

import { rgba } from '../../../../core/utils';
import { useLogin } from '../../../hooks';

const useStyles = createUseStyles({
  button: {
    '& svg': { marginLeft: 7 },
    '&:hover': { background: rgba('#000000', 0.45), color: '#FFFFFF' },
    borderColor: rgba('#000000', 0.25),
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#959AA0',
    composes: ['is-block', 'p12', 'no-background', 'fs14'],
    transition: 'color 0.5s, background 0.5s',
    width: '100%',
  },
});

const SignoutComponent = React.memo(() => {
  const classes = useStyles();
  const { onSignoutClick } = useLogin();
  return (
    <button className={classes.button} type="button" onClick={onSignoutClick}>
      <span>Signout</span>
      <LogoutIcon />
    </button>
  );
});

export default SignoutComponent;
