import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['py12', 'px24', 'debug'],
  },
});

const SubmitButtonComponent = ({ disabled, iconclass, label, onClick }) => {
  const classes = useStyles();
  return (
    <button
      className={classes.container}
      disabled={disabled}
      type="button"
      onClick={evt => {
        evt.preventDefault();
        onClick();
      }}>
      <span>
        {iconclass && <i className={iconclass} />}
        {label && <span>{label}</span>}
      </span>
    </button>
  );
};

SubmitButtonComponent.defaultProps = {
  disabled: false,
  iconclass: false,
  label: false,
};

SubmitButtonComponent.propTypes = {
  disabled: PropTypes.bool,
  iconclass: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
};

export default SubmitButtonComponent;
