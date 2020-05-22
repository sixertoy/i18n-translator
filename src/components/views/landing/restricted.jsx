import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { useLogin } from '../../hooks';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    background: theme.colors.transparent,
    color: theme.colors.white,
    composes: [
      'text-right',
      'fs14',
      'is-block',
      'mt12',
      'is-underline',
      'px12',
    ],
    width: '100%',
  }),
  wrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 680,
    paddingTop: 7,
    width: '80%',
  },
  [`@media (max-width: ${580}px)`]: {
    button: {
      textAlign: 'center !important',
    },
  },
});

const DemoComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
