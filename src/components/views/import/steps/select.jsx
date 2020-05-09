import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { LANGUAGES_FREE } from '../../../../constants';
import { selectLanguages } from '../../../../redux/selectors';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-columns', 'flex-center', 'items-center'],
    height: '70%',
  },
  inner: ({ theme }) => ({
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['fs12', 'text-left', 'is-relative', 'is-block', 'px24', 'py12'],
    width: theme.sizes.form,
  }),
  input: {
    border: 0,
    composes: ['fs14', 'm0', 'p0', 'use-pointer', 'is-block'],
    height: 48,
    width: '100%',
  },
  label: {
    background: '#F1F1F1',
    composes: ['is-absolute', 'is-bold', 'px5', 'py5'],
    left: 12,
    top: -12,
  },
  options: {
    composes: ['fs14', 'm0', 'p0', 'use-pointer'],
    minWidth: '100%',
    width: '100%',
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
  const { id } = useParams();
  const languages = useSelector(state => selectLanguages(state, id));

  const onSelect = useCallback(
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
      <label className={classes.inner} htmlFor="select.lang">
        <span className={classes.label}>
          <span>Séléctionner</span>
        </span>
        <select
          className={classes.input}
          name="select.lang"
          value={lang}
          onChange={onSelect}>
          <option className={classes.options} value="">
            -
          </option>
          {Object.entries(LANGUAGES_FREE)
            .sort(languageAlphaSort)
            .map(([key, label]) => {
              const isDisabled = languages.includes(key);
              return (
                <option
                  key={key}
                  className={classes.options}
                  disabled={isDisabled}
                  value={key}>
                  {label}
                </option>
              );
            })}
        </select>
      </label>
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
