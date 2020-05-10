import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    composes: ['use-pointer', 'py12', 'px24', 'mt12', 'ml12'],
  },
  icon: {
    composes: ['ml7'],
  },
});

const ContinueButtonComponent = React.memo(({ disabled, onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <button
      className={classes.button}
      disabled={disabled}
      type="button"
      onClick={onClick}>
      <span>Continuer</span>
      <ArrowIcon className={classes.icon} />
    </button>
  );
});

ContinueButtonComponent.defaultProps = {};

ContinueButtonComponent.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContinueButtonComponent;
