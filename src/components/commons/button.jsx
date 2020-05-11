import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['fs18', 'is-block', 'py12', 'px24'],
    width: theme.sizes.submit,
  }),
});

const ButtonComponent = React.memo(({ children, className, onClick }) => {
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

ButtonComponent.defaultProps = {
  className: null,
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
