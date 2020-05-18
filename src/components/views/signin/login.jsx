import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link, useLocation } from 'react-router-dom';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    borderTopColor: theme.colors.black,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    composes: ['pt24', 'mt32'],
  }),
});

const LoginComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { state } = useLocation();
  const { useSignup } = state;
  return (
    <div className={classes.container}>
      <Link
        className={classes.signin}
        to={{
          pathname: useSignup ? '/signin' : '/signin',
          state: { useSignup: !useSignup },
        }}>
        {!useSignup && <span>Vous avez déjà un compte ? Connectez-vous</span>}
        {useSignup && (
          <span>Vous n&apos;avez pas de compte ? Inscrivez-vous</span>
        )}
      </Link>
    </div>
  );
});

export default LoginComponent;
