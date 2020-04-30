// import 'react-select/dist/react-select.css';

import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

// import Select from 'react-select';
import Button from '../../commons/button';

const useStyles = createUseStyles({
  container: {
    backgroundColor: '#FBFBFB',
    composes: ['flex-columns', 'flex-between', 'items-center'],
    marginLeft: '1px',
    minHeight: '60px',
    padding: '12px 32px',
  },
});

const EDITOR_MODES = [
  { id: 'json', label: 'JSON' },
  { id: 'javascript', label: 'JavaScript' },
];

const FooterControlsComponent = ({
  canSubmit,
  mode,
  onCancel,
  onModeChange,
  onSubmit,
}) => {
  const classes = useStyles();
  const onSelectBoxChange = evt => {
    evt.preventDefault();
    const { value } = evt.target;
    onModeChange(value);
  };
  return (
    <div className={classes.container}>
      <div>
        <select value={mode} onChange={onSelectBoxChange}>
          {EDITOR_MODES.map(obj => (
            <option key={obj.id} value={obj.id}>
              {obj.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        {onCancel && <Button label="Cancel" onClick={onCancel} />}
        {onSubmit && (
          <Button disabled={!canSubmit} label="Continue" onClick={onSubmit} />
        )}
      </div>
    </div>
  );
};

FooterControlsComponent.defaultProps = {
  canSubmit: true,
};

FooterControlsComponent.propTypes = {
  canSubmit: PropTypes.bool,
  mode: PropTypes.string.isRequired,
  onCancel: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  onModeChange: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
    .isRequired,
  onSubmit: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};

export default FooterControlsComponent;
