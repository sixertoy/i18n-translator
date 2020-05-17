import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    borderTopColor: theme.colors.black,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    composes: ['pt24', 'mt32'],
  }),
});

const LoginComponent = React.memo(({ subscribe }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <Link
        className={classes.signin}
        to={{
          pathname: subscribe ? '/signin' : '/signin',
          state: { subscribe: !subscribe },
        }}>
        {!subscribe && <span>Vous avez déjà un compte ? Connectez-vous</span>}
        {subscribe && (
          <span>Vous n&apos;avez pas de compte ? Inscrivez-vous</span>
        )}
      </Link>
    </div>
  );
});

LoginComponent.propTypes = {
  subscribe: PropTypes.bool.isRequired,
};

export default LoginComponent;
