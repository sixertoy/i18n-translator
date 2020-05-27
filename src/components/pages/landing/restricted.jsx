import React from 'react';
import { createUseStyles } from 'react-jss';

import { useLogin } from '../../hooks';

const useStyles = createUseStyles({
  button: {
    color: '#FFFFFF',
    composes: [
      'text-right',
      'fs14',
      'is-block',
      'mt12',
      'is-underline',
      'no-background',
      'px12',
    ],
    width: '100%',
  },
  wrapper: {
    composes: ['pt7'],
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 680,
    width: '80%',
  },
  [`@media (max-width: ${580}px)`]: {
    button: {
      textAlign: 'center !important',
    },
  },
});

const DemoComponent = React.memo(() => {
  const classes = useStyles();
  const { onAnonymousClick } = useLogin();
  return (
    <div className={classes.wrapper}>
      <button
        className={classes.button}
        type="button"
        onClick={onAnonymousClick}>
        <span>Testez sans vous inscrire</span>
      </button>
    </div>
  );
});

export default DemoComponent;
