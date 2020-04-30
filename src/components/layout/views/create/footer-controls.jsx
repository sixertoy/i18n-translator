// import 'react-select/dist/react-select.css';

import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

// import Select from 'react-select';
import Button from '../../commons/button';
import SelectMode from './select-mode';

const useStyles = createUseStyles({
  container: {
    backgroundColor: '#FBFBFB',
    composes: ['flex-columns', 'flex-between'],
    marginLeft: '1px',
    minHeight: '60px',
    padding: '12px 32px',
  },
});

const FooterControlsComponent = ({
  mode,
  onCancel,
  onModeChange,
  onSubmit,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SelectMode mode={mode} onChange={onModeChange} />
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

FooterControlsComponent.propTypes = {
  mode: PropTypes.string.isRequired,
  onCancel: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  onModeChange: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
    .isRequired,
  onSubmit: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};

export default FooterControlsComponent;
