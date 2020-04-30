// import 'react-select/dist/react-select.css';

import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import Select from 'react-select';

import Button from '../../commons/button';

const useStyles = createUseStyles({
  container: {
    backgroundColor: '#FBFBFB',
    composes: ['flex-columns', 'flex-between'],
    marginLeft: '1px',
    minHeight: '60px',
    padding: '12px 32px',
  },
});

const MODES = [
  { label: 'JSON', value: 'json' },
  { label: 'JavaScript', value: 'javascript' },
];

const ControlsComponent = ({ mode, onCancel, onChangeMode, onSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Select
          clearable={false}
          name="form-field-name"
          options={MODES}
          value={mode}
          onChange={onChangeMode}
        />
      </div>
      <div>
        {onCancel && <Button label="Cancel" onClick={onCancel} />}
        {onSubmit && (
          <Button
            iconclass="icon-download"
            label="Continue"
            onClick={onSubmit}
            // styles={{ background: this.context.theme.velvet }}
          />
        )}
      </div>
    </div>
  );
};

ControlsComponent.propTypes = {
  mode: PropTypes.string.isRequired,
  onCancel: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  onChangeMode: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
    .isRequired,
  onSubmit: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};

export default ControlsComponent;
