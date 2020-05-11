import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DEFAULT_LANGUAGES } from '../../../../constants';
import { selectLangs } from '../../../../redux/selectors';
import { useFormStyles } from './styles';
import { flagOptionsWithDisabled } from './utils';

const useStyles = createUseStyles({
  container: {
    marginTop: '8%',
  },
});

const StepSelectComponent = ({ lang, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const formClasses = useFormStyles({ theme });

  const { id } = useParams();
  const langs = useSelector(state => selectLangs(state, id));
  const flaggedOptions = flagOptionsWithDisabled(langs, DEFAULT_LANGUAGES);

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
