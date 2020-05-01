import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { LANGS } from '../../../constants';

const useStyles = createUseStyles({
  options: {
    cursor: 'pointer',
    minWidth: '100%',
    width: '100%',
  },
  select: {
    border: 0,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 14,
    margin: 0,
    minWidth: '100%',
    padding: 0,
    width: '100%',
  },
  'select-box': {
    border: '1px solid #000',
    borderRadius: 4,
    display: 'inline-block',
    fontSize: 14,
    padding: '9px 12px',
    textAlign: 'left',
    width: 200,
  },
});

const languageAlphaSort = (a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
};

const LangSelectComponent = ({ onChange, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <span className={classes['select-box']}>
      <select
        className={classes.select}
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

LangSelectComponent.defaultProps = {};

LangSelectComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LangSelectComponent;
