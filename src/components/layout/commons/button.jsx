import PropTypes from 'prop-types';
import React from 'react';

const SubmitButtonComponent = ({ classes, iconclass, label, onClick }) => (
  <button
    className={classes || ''}
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

SubmitButtonComponent.defaultProps = {
  classes: '',
  iconclass: false,
  label: false,
};

SubmitButtonComponent.propTypes = {
  classes: PropTypes.string,
  iconclass: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
};

export default SubmitButtonComponent;
