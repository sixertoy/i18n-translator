import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { useButtonStyles } from '../styles';

const ButtonComponent = React.memo(
  ({ children, className, disabled, label, onClick }) => {
    const buttonClasses = useButtonStyles();
    return (
      <button
        className={classnames(buttonClasses.btn, className)}
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
