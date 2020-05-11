import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '& + &': { marginTop: 12 },
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    composes: ['fs18', 'is-block', 'py12', 'px24'],
    width: theme.sizes.loginwidth,
  }),
});

const LoginButtonComponent = React.memo(({ children, className, onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <button
      className={classnames(classes.button, className)}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
});

LoginButtonComponent.defaultProps = {
  className: null,
};

LoginButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default LoginButtonComponent;
