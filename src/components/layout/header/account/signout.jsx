import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { useLogin } from '../../../hooks';

const useStyles = createUseStyles({
  button: {},
});

const SignoutComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { onSignoutClick } = useLogin();
  return (
    <button className={classes.button} type="button" onClick={onSignoutClick}>
      <span>Signout</span>
    </button>
  );
});

export default SignoutComponent;
