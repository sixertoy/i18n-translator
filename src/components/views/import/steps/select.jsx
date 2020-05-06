import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { LANGS } from '../../../../constants';

const useStyles = createUseStyles({
  container: {},
  input: {
    border: 0,
    composes: ['debug', 'fs14', 'm0', 'p0'],
    cursor: 'pointer',
    display: 'inline-block',
    minWidth: '100%',
    width: '100%',
  },
  options: {
    composes: ['debug'],
    cursor: 'pointer',
    minWidth: '100%',
    width: '100%',
  },
  select: {
    '&.disabled': {
      opacity: 0.45,
    },
    composes: ['debug', 'fs12', 'text-left'],
    display: 'inline-block',
    padding: '9px 12px',
    width: 200,
  },
});

const languageAlphaSort = (a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
};

const SelectStepComponent = ({ lang, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const callback = useCallback(
    evt => {
      evt.preventDefault();
      const { value } = evt.target || {};
      const isvalid = value && value !== '';
      if (!isvalid) return;
      onChange(value);
    },
    [onChange]
  );
  return (
    <div className={classes.container}>
      <span className={classes.select}>
        <select className={classes.input} value={lang} onChange={callback}>
          <option className={classes.options} value="">
            -
          </option>
          {Object.entries(LANGS)
            .sort(languageAlphaSort)
            .map(([id, label]) => (
              <option key={id} className={classes.options} value={id}>
                {label}
              </option>
            ))}
        </select>
      </span>
    </div>
  );
};

SelectStepComponent.defaultProps = {
  lang: undefined,
};

SelectStepComponent.propTypes = {
  lang: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectStepComponent;
