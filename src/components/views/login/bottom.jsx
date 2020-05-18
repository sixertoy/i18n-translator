import React, { useRef } from 'react';
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
  const label = useRef('');
  const pathto = useRef({});

  const theme = useTheme();
  const classes = useStyles({ theme });
  const { pathname } = useLocation();
  const useSignup = pathname === '/signup';

  pathto.current = useSignup
    ? { pathname: '/signin' }
    : { pathname: '/signup' };
  label.current = useSignup
    ? 'Vous avez déjà un compte ? Connectez-vous'
    : "Vous n'avez pas de compte ? Inscrivez-vous";

  return (
    <div className={classes.container}>
      <Link className={classes.signin} to={pathto.current}>
        <span>{label.current}</span>
      </Link>
    </div>
  );
});

export default LoginComponent;
