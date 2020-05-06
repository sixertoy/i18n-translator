import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { LANGS } from '../../../../constants';

const useStyles = createUseStyles({
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

const LanguageStepComponent = ({ lang, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.step}>
      <span className={classes.select}>
        <select
          className={classes.input}
          value={lang}
          onChange={evt => {
            evt.preventDefault();
            onChange(evt.target.value);
          }}>
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

LanguageStepComponent.propTypes = {
  lang: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguageStepComponent;
