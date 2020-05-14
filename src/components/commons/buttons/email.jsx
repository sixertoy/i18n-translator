// import firebase from 'firebase/app';
import React, { useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../button';

const useStyles = createUseStyles({
  container: {},
});

const EmailButtonComponent = React.memo(() => {
  const input = useRef(null);
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <input
        ref={input}
        placeholder="Saisissez une adresse e-mail"
        type="email"
      />
      <Button onClick={() => {}}>
        <span>S&apos;inscrire</span>
      </Button>
    </div>
  );
});

export default EmailButtonComponent;
