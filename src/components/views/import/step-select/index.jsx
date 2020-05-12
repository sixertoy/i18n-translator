import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DEFAULT_LANGUAGES } from '../../../../constants';
import { selectLangs } from '../../../../redux/selectors';
import { useStepStyles } from '../../../hooks';
import { flagOptionsWithDisabled } from '../utils';

const useStyles = createUseStyles({
  container: {
    marginTop: '8%',
  },
});

const StepSelectComponent = ({ draft, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const stepStyles = useStepStyles({ theme });
  const { id } = useParams();

  const [value, setValue] = useState(undefined);

  const langs = useSelector(state => selectLangs(state, id));
  const flaggedOptions = flagOptionsWithDisabled(langs, DEFAULT_LANGUAGES);

  const onSelect = useCallback(
    evt => {
      evt.preventDefault();
      const lang = evt.target.value;
      const isvalid = lang && lang !== '' && !langs.includes(lang);
      // NOTE afficher une notification d'erreur
      if (!isvalid) return;
      onSubmit({ ...draft, lang });
    },
    [draft, langs, onSubmit]
  );

  useEffect(() => {
    setValue(draft.lang);
  }, [draft]);

  return (
    <div className={classes.container} id="step-select">
      <div className={stepStyles.form}>
        <div className={stepStyles.field}>
          <span className={stepStyles.label} htmlFor="select.lang">
            <span>Séléctionner</span>
          </span>
          <select
            className={stepStyles.select}
            defaultValue=""
            name="select.lang"
            placeholder="Sélectionner une langue"
            value={value}
            onChange={onSelect}>
            <option className={stepStyles.options} value="">
              Sélectionner une langue
            </option>
            {flaggedOptions.map(([key, label, disabled]) => (
              <option
                key={key}
                className={stepStyles.options}
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

StepSelectComponent.propTypes = {
  draft: PropTypes.shape({
    content: PropTypes.string,
    lang: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default StepSelectComponent;
