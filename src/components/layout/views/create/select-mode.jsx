import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const SelectModeComponent = ({ mode, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <select
        value={mode}
        onChange={evt => {
          evt.preventDefault();
          const { value } = evt.target;
          onChange(value);
        }}>
        {[
          { id: 'json', label: 'JSON' },
          { id: 'javascript', label: 'JavaScript' },
        ].map(obj => {
          return (
            <option key={obj.id} value={obj.id}>
              {obj.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectModeComponent.defaultProps = {};

SelectModeComponent.propTypes = {
  mode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectModeComponent;
