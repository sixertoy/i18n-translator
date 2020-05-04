import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { LANGS } from '../../../constants';

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

const LangSelectComponent = ({ disabled, onChange, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <span
      className={classnames(classes.select, {
        disabled,
      })}>
      <select
        className={classes.input}
        disabled={disabled}
        value={value}
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
  );
};

LangSelectComponent.defaultProps = {
  disabled: false,
};

LangSelectComponent.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LangSelectComponent;
