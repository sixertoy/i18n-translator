import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { useLogin } from '../../hooks';

const useStyles = createUseStyles({
  anonymous: ({ theme }) => ({
    '&:disabled': { opacity: 1, textDecoration: 'none' },
    background: theme.colors.transparent,
    clear: 'right',
    color: theme.colors.white,
    composes: [
      'float-right',
      'text-center',
      'fs18',
      'is-block',
      'mt12',
      'is-underline',
    ],
    width: 300,
  }),
});

const DemoComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { onAnonymousClick } = useLogin();
  return (
    <button
      className={classes.anonymous}
      type="button"
      onClick={onAnonymousClick}>
      <span>Testez sans vous inscrire</span>
    </button>
  );
});

export default DemoComponent;
