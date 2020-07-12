import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { DEFAULT_LANGUAGES } from '../../../../constants';
import { selectLangs } from '../../../../redux/selectors';
import useStepStyles from '../styles';
import useStep from '../use-step';
import { getDisableLanguages } from './utils';

const useStyles = createUseStyles({
  container: {
    marginTop: '8%',
  },
});

const StepLangComponent = ({ index }) => {
  const classes = useStyles();
  const stepClasses = useStepStyles();
  const { draft, onStepChange } = useStep(index);
  const input = useRef(null);

  const langs = useSelector(state => selectLangs(state, draft.id));
  const options = getDisableLanguages(langs);

  const onChange = useCallback(
    evt => {
      evt.preventDefault();
      const lang = input.current.value;
      const label = DEFAULT_LANGUAGES[lang];
      onStepChange({ label, langs: [lang] });
    },
    [onStepChange]
  );

  return (
    <div className={classes.container} id="step-select">
      <div className={stepClasses.form}>
        <div className={stepClasses.field}>
          <span className={stepClasses.label} htmlFor="select.lang">
            <span>Séléctionner</span>
          </span>
          <select
            ref={input}
            className={stepClasses.select}
            defaultValue={input.current}
            name="select.lang"
            placeholder="Sélectionner une langue"
            onChange={onChange}>
            <option className={stepClasses.options} value="">
              Sélectionner une langue
            </option>
            {options.map(([key, label, disabled]) => (
              <option
                key={key}
                className={stepClasses.options}
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

StepLangComponent.propTypes = {
  index: PropTypes.number.isRequired,
};

export default StepLangComponent;
