import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DEFAULT_LANGUAGES } from '../../../../constants';
import { selectLangs } from '../../../../redux/selectors';
import { useFormStyles } from './styles';

const useStyles = createUseStyles({
  container: {
    marginTop: '8%',
  },
});

const languageAlphaSort = (a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
};

const languageDisabledSort = (a, b) => {
  if (a[2] > b[2]) return 1;
  if (a[2] < b[2]) return -1;
  return 0;
};

const flagOptionsWithDisabled = langs => {
  const grouped = Object.entries(DEFAULT_LANGUAGES)
    .sort(languageAlphaSort)
    .map(arr => {
      const key = arr[0];
      const disabled = langs.includes(key);
      return [...arr, disabled];
    })
    .sort(languageDisabledSort);
  return grouped;
};

const StepSelectComponent = ({ lang, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const formClasses = useFormStyles({ theme });

  const { id } = useParams();
  const langs = useSelector(state => selectLangs(state, id));
  const flaggedOptions = flagOptionsWithDisabled(langs);

  const onSelect = useCallback(
    evt => {
      evt.preventDefault();
      const { value } = evt.target || {};
      const isvalid = value && value !== '' && !langs.includes(value);
      // NOTE afficher une notification d'erreur
      if (!isvalid) return;
      onChange(value);
    },
    [langs, onChange]
  );

  return (
    <div className={classes.container} id="step-select">
      <div className={formClasses.form}>
        <div className={formClasses.field}>
          <span className={formClasses.label} htmlFor="select.lang">
            <span>Séléctionner</span>
          </span>
          <select
            className={formClasses.select}
            defaultValue=""
            name="select.lang"
            placeholder="Sélectionner une langue"
            value={lang}
            onChange={onSelect}>
            <option className={formClasses.options} value="">
              Sélectionner une langue
            </option>
            {flaggedOptions.map(([key, label, disabled]) => (
              <option
                key={key}
                className={formClasses.options}
                disabled={disabled}
                value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

StepSelectComponent.defaultProps = {
  lang: undefined,
};

StepSelectComponent.propTypes = {
  lang: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default StepSelectComponent;
