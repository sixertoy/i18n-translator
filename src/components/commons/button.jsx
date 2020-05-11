import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:disabled': { cursor: 'not-allowed', opacity: 0.45 },
    '&:hover': { background: theme.colors.red },
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs18', 'py12', 'px24', 'use-pointer'],
    transition: 'background 0.5s, opacity 0.5s',
  }),
});

const ButtonComponent = React.memo(
  ({ children, className, disabled, label, onClick }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
      <button
        className={classnames(classes.button, className)}
        disabled={disabled}
        type="button"
        onClick={onClick}>
        {!label && children}
        {!children && label}
      </button>
    );
  }
);

ButtonComponent.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  label: null,
};

ButtonComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
