import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    backgroundColor: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['py12', 'px24'],
  },
});

const SubmitButtonComponent = ({ iconclass, label, onClick }) => {
  const classes = useStyles();
  return (
    <button
      className={classes.container}
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
  iconclass: false,
  label: false,
};

SubmitButtonComponent.propTypes = {
  iconclass: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
};

export default SubmitButtonComponent;
