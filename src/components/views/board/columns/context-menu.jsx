import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['p12'],
    maxWidth: 240,
    minWidth: 240,
    width: 240,
  },
});

const ContextMenuComponent = ({ onClear, onRemove }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button type="button" onClick={onClear}>
        <span>Clear</span>
      </button>
      <button type="button" onClick={onRemove}>
        <span>Remove</span>
      </button>
    </div>
  );
};

ContextMenuComponent.defaultProps = {};

ContextMenuComponent.propTypes = {
  onClear: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContextMenuComponent;
